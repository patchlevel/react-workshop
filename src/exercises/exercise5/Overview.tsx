import React, {useState} from "react";

/*
 * RestAPI
 *
 * https://alexwohlbruck.github.io/cat-facts/docs/
 *
 * Aufgabe:
 *   Hole Daten aus einer REST API und zeige diese an.
 */
const Overview: React.FC = () => {
    const [data, setData] = useState<Array<any>|null>(null);

    if (data === null) {
        return <div>Loading...</div>
    }

    return (
        <div>
            {data.map(renderItem)}
        </div>
    );
}

const renderItem = (item: any) => {
    return (
        <div>item...</div>
    );
}

export default Overview;