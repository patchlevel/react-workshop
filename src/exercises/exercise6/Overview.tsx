import React, {useState} from "react";

/*
 * RestAPI
 *
 * https://alexwohlbruck.github.io/cat-facts/docs/
 *
 * Aufgabe:
 *   Hole Daten aus einer REST API und zeige diese an.
 *   Füge zu jedem Beitrag ein Up/Down-Vote Button hinzu und zeig den aktuellen Status an.
 */
const Overview: React.FC = () => {
    const [data, setData] = useState(null);
    const [votes, setVotes] = useState([]);

    if (data === null) {
        return <div>Loading...</div>
    }

    const renderItem = (item: any) => {
        return (
            <div>item...</div>
        );
    }

    return (
        <div>
            {/* @ts-ignore*/}
            {data.map(renderItem)}
        </div>
    );
}

export default Overview;