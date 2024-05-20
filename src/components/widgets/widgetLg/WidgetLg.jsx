import './widgetLg.scss'


const Button = ({type}) => {
    return <button className={'lgButton ' + type}>{type}</button>
}

const WidgetLg = ({title}) => {
  return (
    <div className='widgetLg'>
        <h3 className="title">{title}</h3>
        <table>
            <thead>
                <tr>
                    <th>Customer</th>
                    <th>Date</th>
                    <th>Amount</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className='user'>
                        <img 
                            src="https://r2.starryai.com/results/1005156662/01ea57ea-66bd-4bed-a467-11bbdedb43ea.webp" 
                            alt=""
                        />
                        <span className="username">Susan Carol</span>
                    </td>
                    <td className="date">2 Jul 2021</td>
                    <td className="amount">$122.00</td>
                    <td className="status"><Button type={"Approved"}/></td>
                </tr>
                <tr>
                    <td className='user'>
                        <img 
                            src="https://r2.starryai.com/results/1005156662/01ea57ea-66bd-4bed-a467-11bbdedb43ea.webp" 
                            alt=""
                        />
                        <span className="username">Susan Carol</span>
                    </td>
                    <td className="date">2 Jul 2021</td>
                    <td className="amount">$122.00</td>
                    <td className="status"><Button type={"Declined"}/></td>
                </tr>
                <tr>
                    <td className='user'>
                        <img 
                            src="https://r2.starryai.com/results/1005156662/01ea57ea-66bd-4bed-a467-11bbdedb43ea.webp" 
                            alt=""
                        />
                        <span className="username">Susan Carol</span>
                    </td>
                    <td className="date">2 Jul 2021</td>
                    <td className="amount">$122.00</td>
                    <td className="status"><Button type={"Pending"}/></td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default WidgetLg