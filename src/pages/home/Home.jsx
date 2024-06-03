import { useEffect, useMemo, useState } from 'react';
import Chart from '../../components/charts/chart/Chart';
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo';
import WidgetLg from '../../components/widgets/widgetLg/WidgetLg';
import WidgetSm from '../../components/widgets/widgetSm/WidgetSm';
import './home.scss';
import { makeRequest } from '../../axios';

const Home = () => {

    const monthsArray = useMemo(() => [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ], []); 
      const [userStats, setUserStats] = useState([]);
      useEffect(() => {
        const getStats = async () => {
          try {
            const accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MjAwNDNkZGE0ZmE3MjJkYWI5NTc3YiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcxNjI3MjM1MCwiZXhwIjoxNzE2NzA0MzUwfQ.1oPBJLhi_6xPvF6SaWpgcPTMflx-SbVCFZnDI74WAZY";
            const res = await makeRequest('/users/stats', {
              headers: {
                accessToken: "Bearer " + accessToken,
              }
            });
            const stats = res.data
                .sort((a, b) => {
                    return a._id - b._id;
                })
                .map((item) => {
               return { month: monthsArray[item._id - 1], "New Users": item.total };
            });
            setUserStats(stats);
          } catch (error) {
            console.log(error);
          }
          
        }
        getStats();
    
      }, [monthsArray]);
      // ^ this is all confusing as to why this const is using useMemo and because its a constant and 
      // why its used as dependency with useEffect but apparently its to be future proof in case months also varies in the future
    
      //console.log(userStats);

      const dataKey = [
        {
            dataKeyName: "New Users",
            stroke: "#8884d8"
        },
      ];
    
      const axis = {
        x: {
            dataKey: "month",
            stroke: "#5550bd"
        },
        y: {
            domain: [0,10],
            stroke: "#5550bd"
        }
      };

  return (
    <div className='home'>
        <FeaturedInfo />
        <div className="chartBorder">
            <Chart title="User Analytics" grid={true} data={userStats} axis={axis} dataKeys={dataKey}/>
        </div>
        <div className="homewidgets">
            <WidgetSm title="Newly Joined Members"/>
            <WidgetLg title="Latest Transactions"/>
        </div>
    </div>
  )
}

export default Home