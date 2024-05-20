import './chart.scss'
import {
    LineChart,
    Line,
    XAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    YAxis,
    Legend,
  } from "recharts";

  const sampleData = [
    {
      name: 'Jan',
      "Active Users": 4000,
      Sales: 2400,
      amt: 2400,
    },
    {
      name: 'Feb',
      "Active Users": 3000,
      Sales: 1398,
      amt: 2210,
    },
    {
      name: 'Mar',
      "Active Users": 2000,
      Sales: 9800,
      amt: 2290,
    },
    {
      name: 'Apr',
      "Active Users": 2780,
      Sales: 3908,
      amt: 2000,
    },
    {
      name: 'May',
      "Active Users": 1890,
      Sales: 4800,
      amt: 2181,
    },
    {
      name: 'Jun',
      "Active Users": 2390,
      Sales: 3800,
      amt: 2500,
    },
    {
      name: 'Jul',
      "Active Users": 3490,
      Sales: 4300,
      amt: 2100,
    },
    {
        name: 'Aug',
        "Active Users": 3000,
        Sales: 2000,
        amt: 2100,
      },
      {
        name: 'Sep',
        "Active Users": 4000,
        Sales: 3000,
        amt: 2100,
      },
      {
        name: 'Oct',
        "Active Users": 4500,
        Sales: 3300,
        amt: 3100,
      },
      {
        name: 'Nov',
        "Active Users": 3500,
        Sales: 2300,
        amt: 2100,
      },
      {
        name: 'Dec',
        "Active Users": 5000,
        Sales: 7300,
        amt: 2100,
      },
  ];

  const valuesToPlot = [
    {
        dataKeyName: "Active Users",
        stroke: "#8884d8"
    },
    {
        dataKeyName: "Sales",
        stroke: "#82ca9d"
    }
  ];

  const axisInfo = {
    x: {
        dataKey: "name",
        stroke: "#5550bd"
    },
    y: {
        domain: [0,10000],
        stroke: "#5550bd"
    }
  };

const Chart = ({title, data, dataKeys, axis, grid}) => {
  return (
    <div className='chart'>
        <h3 className="title">{title}</h3>
        <ResponsiveContainer width="100%" aspect={3 / 1}>
            <LineChart data={data || sampleData}>
                {axis ? <>
                        <XAxis dataKey={axis.x.dataKey} stroke={axis.x.stroke}/>
                        <YAxis domain={axis.y.domain} stroke={axis.y.stroke}/>
                    </>
                    : <>
                        <XAxis dataKey="name" stroke='#5550bd'/>
                        <YAxis domain={[0,10000]} stroke='#5550bd'/>
                    </>
                }
                {dataKeys ? dataKeys.map((dataKey) => {
                    return (<>
                        <Line 
                            type="monotone" 
                            dataKey={dataKey.dataKeyName} 
                            stroke={dataKey.stroke} 
                            activeDot={{ /*fill: 'red',*/ r: 8 }}
                            />
                    </>);
                })
                    : <>
                        <Line type="monotone" dataKey="Active Users" stroke="#8884d8" activeDot={{ /*fill: 'red',*/ r: 8 }}/>
                        <Line type="monotone" dataKey="Sales" stroke="#82ca9d" activeDot={{ r: 8 }}/>
                    </>
                }
                
                <Tooltip />
                {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5"/>}
                <Legend />
            </LineChart>
        </ResponsiveContainer>
    </div>
  )
}

export default Chart

// For more info : https://recharts.org/en-US/examples