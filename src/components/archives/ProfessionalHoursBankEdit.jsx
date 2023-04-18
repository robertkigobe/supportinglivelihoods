import {Link, useNavigate, useParams} from "react-router-dom";
import {Button, Container, Form, FormGroup, Input, Label} from "reactstrap";
import {useState,useEffect} from "react";

const ProfessionalHoursBankEdit = () =>{

    const initialFormState = {
        name: '',
        userEmail: '',
        telephone: '',
        title: '',
        start_date: '',
        end_date: '',
        start_hour: '',
        end_hour: '',
        description: '',
        category: '',
        completed: '',
        closed: ''
    };

    const [service, setService] = useState(initialFormState);
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        if (id !== 'new') {
            console.log(id);
            fetch(`services/professionalhour/${id}`)
                .then(response => response.json())
                .then(data => setService(data));
        }
    }, [id, setService]);

    const handleChange = (event) => {
        const { name, value } = event.target

        setService({ ...service, [name]: value })
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        await fetch(`/services/service${service.id ? `/${service.id}` : ''}`, {
            method: (service.id) ? 'PUT' : 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(service)
        });
        setService(initialFormState);
        navigate('/profesisonalhoursbank');
    }

    const title = <h2>{service.id ? 'Edit Service' : 'Add Service'}</h2>;

    return (<div>

        <Container>
            {title}
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label for="name">Name</Label>
                    <Input type="text" name="name" id="name" value={service.name || ''}
                           onChange={handleChange} autoComplete="name"/>
                </FormGroup>
                <FormGroup>
                    <Label for="userEmail">Email</Label>
                    <Input type="text" name="userEmail" id="userEmail" value={service.userEmail || ''}
                           onChange={handleChange} autoComplete="userEmail"/>
                </FormGroup>
                <FormGroup>
                    <Label for="telephone">Telephone</Label>
                    <Input type="text" name="telephone" id="telephone" value={service.telephone || ''}
                           onChange={handleChange} autoComplete="telephone"/>
                </FormGroup>

                <FormGroup>
                    <Button color="primary" type="submit">Save</Button>{' '}
                    <Button color="secondary" tag={Link} to="/professionalhours">Cancel</Button>
                </FormGroup>
            </Form>
        </Container>
    </div>);
};
export default ProfessionalHoursBankEdit;