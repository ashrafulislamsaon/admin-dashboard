import { ArrowDownwardOutlined, LocalAtmOutlined, ShoppingBagOutlined } from "@mui/icons-material"
import "./FeatureCard.css"

const FeatureCard = () => {
  return (
    <div className="feature">
        <div className="featureCard">
        <div className="featureIcon orange">
            <span className="shoppingBag"> <ShoppingBagOutlined/> </span>
        </div>
        <div className="featureInfo">
            <span className="featureRevenue">$300000</span>
            <span className="featureTitle">Total Revenue Amount</span>
        </div>
        </div>
        <div className="featureCard">
        <div className="featureIcon green">
            <span className="salesIcon"> <LocalAtmOutlined/> </span>
        </div>
        <div className="featureInfo">
            <span className="featureRevenue">$500000</span>
            <span className="featureTitle">Total Sales Amount</span>
        </div>
        </div>
        <div className="featureCard">
        <div className="featureIcon blue">
            <span className="dueArrow"> <ArrowDownwardOutlined/> </span>
        </div>
        <div className="featureInfo">
            <span className="featureRevenue">$20000</span>
            <span className="featureTitle">Total Due Amount</span>
        </div>
        </div>
    </div>
  )
}

export default FeatureCard