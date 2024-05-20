import Chart from '../../components/charts/chart/Chart';
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo';
import WidgetLg from '../../components/widgets/widgetLg/WidgetLg';
import WidgetSm from '../../components/widgets/widgetSm/WidgetSm';
import './home.scss';

const Home = () => {
  return (
    <div className='home'>
        <FeaturedInfo />
        <div className="chartBorder">
            <Chart title="User Analytics" grid={true}/>
        </div>
        <div className="homewidgets">
            <WidgetSm title="Newly Joined Members"/>
            <WidgetLg title="Latest Transactions"/>
        </div>
    </div>
  )
}

export default Home