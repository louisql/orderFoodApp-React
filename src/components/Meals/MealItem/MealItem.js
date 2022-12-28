const MealItem = props => {
    const price = `$${props.price.toFixed(2)}`
    /* Making sure there are 2 decimals to the price */

    return(
        <li>
            <div>
                <h3>{props.name}</h3>
            </div>
            <div>{props.description}</div>
            <div></div>
        </li>
    )
}

export default MealItem