import './featuredInfo.scss';
import { ArrowDownward, ArrowUpward } from '@material-ui/icons';

const FeaturedInfo = () => {
  return (
    <div className='featuredInfo'>
        <div className="featuredItem">
            <span className="title">Revenue</span>
            <div className="money-container">
                <span className="featuredMoney">$2,415</span>
                <span className="featuredMoneyRate negative">
                    -11.4
                    <ArrowDownward className='icon negative'/>
                </span>
            </div>
            <span className="featuredSub">Compared to last month</span>
        </div>
        <div className="featuredItem">
            <span className="title">Sales</span>
            <div className="money-container">
                <span className="featuredMoney">$4,415</span>
                <span className="featuredMoneyRate negative">
                    -1.4
                    <ArrowDownward className='icon negative'/>
                </span>
            </div>
            <span className="featuredSub">Compared to last month</span>
        </div>
        <div className="featuredItem">
            <span className="title">Cost</span>
            <div className="money-container">
                <span className="featuredMoney">$2,215</span>
                <span className="featuredMoneyRate positive">
                    +2.4
                    <ArrowUpward className='icon positive'/>
                </span>
            </div>
            <span className="featuredSub">Compared to last month</span>
        </div>
    </div>
  )
}

export default FeaturedInfo