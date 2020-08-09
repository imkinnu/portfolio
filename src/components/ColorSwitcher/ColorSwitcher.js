import React from 'react';

const ColorSwitcher = ({ changeColor }) => {

    let colors = ['#1abc9c', '#f1c40f', '#e74c3c', '#d35400'];

    const styles = {
        switcher: {
            color: "white",
            padding: "10px",
            fontFamily: "Arial",
            margin: "0 25px"
        }
    }

    return (
        <div>
            <ul style={styles.switcher}>
                {
                    colors.map(item => {
                        return (
                            <li className="li" style={{
                                backgroundColor: `${item}`
                            }} onClick={() => changeColor(item)}></li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default ColorSwitcher
