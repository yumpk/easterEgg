import React from "react";
import axios from "axios";


class EggChoice extends React.Component{
    constructor (props){
        super(props);
        this.state = {
            filter1 :"XS",
            filter2 : "junk",
            eggsList : [],
        };
        this.handleChangeFilter1 = this.handleChangeFilter1.bind(this);
        this.handleChangeFilter2 = this.handleChangeFilter2.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };
    handleChangeFilter1 (event) {
        this.setState({filter1 : event.target.value})           
        };
    handleChangeFilter2 (event) {
        this.setState({filter2 : event.target.value})         
        };
    handleSubmit (event) {
        event.preventDefault();
        axios
        .get("http://easteregg.wildcodeschool.fr/api/eggs")
        .then(resultat => {
            this.setState({eggsList: resultat.data});
        });               
    };           
    aleatoire(len) {
        return (Math.floor((len)*Math.random()));
    };        
    render(){    
        const caliber = ["XS","S","M","L","XL","2XL","3XL"];
        const rarity = ["junk","basic", "fine", "exotic", "ascended", "rare", "masterwork", "legendary"];
        const filteredEggs = this.state.eggsList.filter((egg)=> {
                return ((egg.caliber === this.state.filter1) && (egg.rarity === this.state.filter2));
                }
            );
        const indice = this.aleatoire(filteredEggs.length);
        const chosenEgg = filteredEggs[indice];    
        return(
            <React.Fragment>
            <form onSubmit={this.handleSubmit}>
            <label>
                Calibre :
                    <select value={this.state.filter1} onChange={this.handleChangeFilter1}>
                        {caliber.map((calib, i) => {
                            return(
                                <option
                                value= {calib}
                                key={i}>
                                {caliber[i]}
                            </option>)    
                        })}
                    </select>
            </label>
            <br />
            <label>
                Rareté :
                    <select value={this.state.filter2} onChange={this.handleChangeFilter2}>
                        {rarity.map((rar, i) => {
                            return(
                                <option
                                value= {rar}
                                key={i}>
                                {rarity[i]}
                            </option>)    
                        })}
                    </select>
                </label>
            <br />
            <input type="submit" value="Envoyer" />
            </form>
            <br />
            <div>
                <h1>{chosenEgg ? chosenEgg.name : ""}</h1>
                <img src={chosenEgg ? chosenEgg.image : ""} alt="cook" />
                <p>{chosenEgg ? chosenEgg.power : ""}</p>
            </div>
            </React.Fragment>
        );
    };
};

export default EggChoice;