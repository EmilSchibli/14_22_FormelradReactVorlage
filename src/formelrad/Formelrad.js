import { useState } from "react";
import '../css/mvp.css';
import formelrad from "../image/formelradelektronik.gif";
import InputField from "../formular/InputField";

export default function Formelrad() {
    const [values, setValues] = useState({
        u: 10,
        i: 2,
        r: "",
        p: ""
    });

    const calculateColor = (value, label) => {
        if (
            (label === "Spannung" && (values.i !== "" && values.r !== "" || values.p !== "")) ||
            (label === "Stromstärke" && (values.u !== "" && values.r !== "" || values.p !== "")) ||
            (label === "Widerstand" && values.u !== "" && values.i !== "") ||
            (label === "Leistung" && (values.u !== "" && values.i !== "" || values.u !== "" && values.r !== "" || values.i !== "" && values.r !== ""))
        ) {
            return "red"; // Berechnet
        }
        return "black"; // Manuell eingegeben
    };

    return (
        <>
            <section>
                <header>
                    <h2>Formelrad</h2>
                    <img src={formelrad} width="200" alt="Formelrad" />
                </header>
                <form>
                    <InputField
                        color={calculateColor(values.u, "Spannung")}
                        value={values.u}
                        label="Spannung"
                        handleChange={e => setValues(values => ({ ...values, u: e.target.value }))}
                    />
                    <InputField
                        color={calculateColor(values.i, "Stromstärke")}
                        value={values.i}
                        label="Stromstärke"
                        handleChange={e => setValues(values => ({ ...values, i: e.target.value }))}
                    />
                    <InputField
                        color={calculateColor(values.r, "Widerstand")}
                        value={values.r}
                        label="Widerstand"
                        handleChange={e => setValues(values => ({ ...values, r: e.target.value }))}
                    />
                    <InputField
                        color={calculateColor(values.p, "Leistung")}
                        value={values.p}
                        label="Leistung"
                        handleChange={e => setValues(values => ({ ...values, p: e.target.value }))}
                    />
                    <button type="submit">Calculate</button>
                </form>
            </section>
        </>
    );
}