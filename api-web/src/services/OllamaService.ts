import { environment } from "@environments/environment";
import axios from "axios";

export class OllamaService {

    public async ollamaService(prompt: string): Promise<any> {
        try {
            const res = await axios.get(`${environment.API_SERVICE}`, { params: { prompt }});
            return res.data;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}