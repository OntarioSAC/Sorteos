import axios from "axios";

const API_URL = "http://54.82.36.182:8000/api/v1";

export const projectData = async () => {
    try {
        const response = await axios.get(`${API_URL}/proyectos`, {
            auth: {
                username: 'rodrigo',
                password: 'admin'
            }
        });
        console.log(response.data); // Imprime los datos en la consola
        return response.data;
    } catch (err) {
        console.error(err);
    }
}
