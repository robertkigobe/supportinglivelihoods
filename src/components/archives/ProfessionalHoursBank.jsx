import React, {useEffect, useState} from "react";
import {Button, ButtonGroup, Container, Navbar, Table} from "reactstrap";
import {Link} from "react-router-dom";

const ProfessionalHoursBank = () => {

    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);

        fetch('services/professionalhours')
            .then(response => response.json())
            .then(data => {
                setServices(data);
                setLoading(false);
            })
    }, []);

    const remove = async (id) => {
        await fetch(`/services/professionalhour/${id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(() => {
            let updatedServices = [...services].filter(i => i.id !== id);
            setServices(updatedServices);
        });
    }

    if (loading) {
        return <p>Loading...</p>;
    }

    const servicesList = services.map(service => {

        return <tr key={service.id}>

            <td style={{whiteSpace: 'nowrap'}}>{service.title}</td>
            <td style={{whiteSpace: 'nowrap'}}>{service.start_date}{' '}{service.start_hour}</td>
            <td style={{whiteSpace: 'nowrap'}}>{service.end_date}{' '}{service.end_hour}</td>

            <td>
                <ButtonGroup>
                    <Button size="sm" color="primary" tag={Link} to={"/profesisonalhoursbank/" + service.id}>Request</Button>
                    <Button size="sm" color="danger" onClick={() => remove(services.id)}>Delete</Button>
                </ButtonGroup>
            </td>
        </tr>
    });

    return (

    <div>
        <Navbar/>
        <Container fluid>

            <h3>Professional Hours Bank</h3>
            <div className="float-right">
                <Button color="success" tag={Link} to="/profesisonalhoursbank/new">Offer Service</Button>
            </div>
            <Table className=" table mt-4">
                <thead>
                <tr>

                    <th width="20%">Tile</th>
                    <th width="20%">Start</th>
                    <th width="20%">End</th>
                    <th width="20%">Action</th>
                </tr>
                </thead>
                <tbody>
                {servicesList}
                </tbody>
            </Table>
        </Container>
    </div>

    );
};

export default ProfessionalHoursBank;