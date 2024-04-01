import { EventRequest } from "./event/event-requests";
import { AlunoRequest } from "./aluno/aluno-request";
import { ComissaoRequest } from "./comission/comission-requests";
import { AreaRequest } from "./area/area-requests";

const eventRequest = new EventRequest();
const alunoRequest = new AlunoRequest();
const comissaoRequest = new ComissaoRequest();
const areaRequest = new AreaRequest();

export {
    eventRequest,
    alunoRequest,
    comissaoRequest,
    areaRequest
};