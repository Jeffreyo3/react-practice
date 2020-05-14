import React from 'react';


export default function Header({ region, updateRegion }) {

    return (
        <>
            <header className="App-header">
                🌎 Countries in the {region} region 🌎
        </header>
            <select id="regions" name="regions" onChange={updateRegion}>
                <option value="EU">European Union</option>
                <option value="EFTA">European Free Trade Association</option>
                <option value="CARICOM">Caribbean Community</option>
                <option value="PA">Pacific Alliance</option>
                <option value="AU">African Union</option>
                <option value="USAN">Union of South American Nations</option>
                <option value="EEU">Eurasian Economic Union</option>
                <option value="AL">Arab League</option>
                <option value="ASEAN">Association of Southeast Asian Nations</option>
                <option value="CAIS">Central American Integration System</option>
                <option value="CEFTA">Central European Free Trade Agreement</option>
                <option value="NAFTA">North American Free Trade Agreement</option>
                <option value="SAARC">South Asian Association for Regional Cooperation</option>
            </select>
        </>
    )
}