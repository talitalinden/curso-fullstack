import React from 'react'

const CelsiusParaFahrenheit = () => {
    const fahrenheit = (celsius * 9/5) + 32;
    return (
    <div>
        <p>{celsius}°C é </p>
    </div>
  )
}

export default CelsiusParaFahrenheit