import Coin from "../../models/Coin"
import { Card, CriptoLogo, CriptoTitlle, Price } from "./styles"

type Props = {
    coin: Coin
}
const CoinCard = ({coin}:Props) =>{
    const formatter = Intl.NumberFormat('pt-BR', {
        currency: 'usd',
        style: 'currency',
    })
    return(
        <Card>
            <CriptoLogo src={coin.logo} alt={coin.name}/>
            <CriptoTitlle>{coin.name}</CriptoTitlle>
            <Price>{formatter.format(coin.CurretPrice)}</Price>
        </Card>
    )
}

export default  CoinCard 
