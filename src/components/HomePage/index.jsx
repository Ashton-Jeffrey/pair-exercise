import { useState, useEffect } from "react"

function HomePage() {
    const [foodPic, setFoodPic] = useState('')

    useEffect(getFoodPic, [])

    function getFoodPic() {
        fetch('https://foodish-api.com/api/')
        .then(function(response) {
            return response.json()
        }).then(function (data) {
            console.log(data)
            setFoodPic(data.image)
        })
    }

    return (
        <div>
            <img src={foodPic}></img>
        </div>
    )
}

export default HomePage