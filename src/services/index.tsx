import axios from 'axios';

// const BASE_URL = 'http://localhost:3000';
const BASE_URL = process.env.API_URL;

/** ======================= ADMIN ROUTES ====================================

 ===> GET http://localhost:8000/egentec/admins
resultado:
{
    "_embedded": {
        "admins": [
            {
                "nome": "Jefferson",
                "cargo": "Director",
                "instituicao": "Fatez ZL",
                "cpf": "1234567892",
                "_links": {
                    "self": {
                        "href": "http://localhost:8000/egentec/admins/1"
                    },
                    "admin": {
                        "href": "http://localhost:8000/egentec/admins/1"
                    },
                    "event": {
                        "href": "http://localhost:8000/egentec/admins/1/event"
                    },
                    "user": {
                        "href": "http://localhost:8000/egentec/admins/1/user"
                    }
                }
            },
            {
                "nome": "Rafael",
                "cargo": "Director",
                "instituicao": "Fatez ZL",
                "cpf": "123456789w2",
                "_links": {
                    "self": {
                        "href": "http://localhost:8000/egentec/admins/3"
                    },
                    "admin": {
                        "href": "http://localhost:8000/egentec/admins/3"
                    },
                    "event": {
                        "href": "http://localhost:8000/egentec/admins/3/event"
                    },
                    "user": {
                        "href": "http://localhost:8000/egentec/admins/3/user"
                    }
                }
            }
        ]
    },
    "_links": {
        "self": {
            "href": "http://localhost:8000/egentec/admins?page=0&size=20"
        },
        "profile": {
            "href": "http://localhost:8000/egentec/profile/admins"
        }
    },
    "page": {
        "size": 20,
        "totalElements": 2,
        "totalPages": 1,
        "number": 0
    }
}


 ===> GET http://localhost:8000/egentec/admins/id
resultado:
{
    "nome": "Jefferson",
    "cargo": "Director",
    "instituicao": "Fatez ZL",
    "cpf": "1234567892",
    "_links": {
        "self": {
            "href": "http://localhost:8000/egentec/admins/1"
        },
        "admin": {
            "href": "http://localhost:8000/egentec/admins/1"
        },
        "event": {
            "href": "http://localhost:8000/egentec/admins/1/event"
        },
        "user": {
            "href": "http://localhost:8000/egentec/admins/1/user"
        }
    }
}

 ===> POST http://localhost:8000/egentec/admins 
envia assim:
{
    "nome": "Jeffersona",
    "cargo": "Directora",
    "instituicao": "Fatez ZL",
    "cpf": "1234567892"
}
resultado:
{
    "nome": "Jeffersona",
    "cargo": "Directora",
    "instituicao": "Fatez ZL",
    "cpf": "1234567892",
    "_links": {
        "self": {
            "href": "http://localhost:8000/egentec/admins/1"
        },
        "admin": {
            "href": "http://localhost:8000/egentec/admins/1"
        },
        "event": {
            "href": "http://localhost:8000/egentec/admins/1/event"
        },
        "user": {
            "href": "http://localhost:8000/egentec/admins/1/user"
        }
    }
}

 ===> PUT http://localhost:8000/egentec/admins/id
envia assim atualizado:
 {
    "nome": "Jefferson",
    "cargo": "Director",
    "instituicao": "Fatez ZL",
    "cpf": "1234567892"
}
resultado:
{
    "nome": "Jefferson",
    "cargo": "Director",
    "instituicao": "Fatez ZL",
    "cpf": "1234567892",
    "_links": {
        "self": {
            "href": "http://localhost:8000/egentec/admins/1"
        },
        "admin": {
            "href": "http://localhost:8000/egentec/admins/1"
        },
        "event": {
            "href": "http://localhost:8000/egentec/admins/1/event"
        },
        "user": {
            "href": "http://localhost:8000/egentec/admins/1/user"
        }
    }
}

 ===> PATCH http://localhost:8000/egentec/admins/id
envia assim atualizando a relacao:
 {
    "nome": "Rafael",
    "cargo": "Director",
    "instituicao": "Fatez ZL",
    "cpf": "123456789w2",
    "event": "http://localhost:8000/egentec/events/1"
}
resultado:
{
    "nome": "Rafael",
    "cargo": "Director",
    "instituicao": "Fatez ZL",
    "cpf": "123456789w2",
    "_links": {
        "self": {
            "href": "http://localhost:8000/egentec/admins/1"
        },
        "admin": {
            "href": "http://localhost:8000/egentec/admins/1"
        },
        "user": {
            "href": "http://localhost:8000/egentec/admins/1/user"
        },
        "event": {
            "href": "http://localhost:8000/egentec/admins/1/event"
        }
    }
}
*/

/*========================= USER ROUTES =================================

 * GET http://localhost:8000/egentec/users
 * GET http://localhost:8000/egentec/users/id
 
 * ACESSAR ADMIN IN USER
 * GET http://localhost:8000/egentec/users/id/admin
 
 * POST http://localhost:8000/egentec/users
 {
    "username":"jefferson@gmail.com",
    "user_password":"senhadoje",
    "atuation":"admin",
    "admin": "http://localhost:8000/egentec/admins/id"
}

 * PUT http://localhost:8000/egentec/users/id
{
    "username":"jefferson@gmail.com",
    "user_password":"senhadojeatualizado",
    "atuation":"admin",
}
*/

/** ========================== EVENT ROUTE =====================================

 * GET http://localhost:8000/egentec/events
 * GET http://localhost:8000/egentec/events/id
 
GET EVENT RULES
 * GET http://localhost:8000/egentec/events/id/rules 
 
 * POST http://localhost:8000/egentec/events
{
    "formato": "hibrido",
    "nome":"engetecss",
    "descricao":"bblabalbalbalbalablabalsdsdsd",
    "local": "casa do chapeuss",
    "dataInicio":"2020-01-01",
    "dataFim":"2021-01-01"
}

 * PUT http://localhost:8000/egentec/events/id
DADOS MODIFICADOS:
 {
    "formato": "hibrido",
    "nome":"engetecss",
    "descricao":"bblabalbalbalbalablabalsdsdsd",
    "local": "casa do chapeuss",
    "dataInicio":"2020-01-01",
    "dataFim":"2021-01-01"
}
*/

/** GET http://localhost:8000/egentec/rules/id

 * POST http://localhost:8000/egentec/rules
 * PUT http://localhost:8000/egentec/rules/id
 * 
 * PATCH http://localhost:8000/egentec/events/id
envia assim atualizando a relacao:
 {
    "nome": "Rafael",
    "cargo": "Director",
    "instituicao": "Fatez ZL",
    "cpf": "123456789w2",
    "event": "http://localhost:8000/egentec/rules/1"
}
 */

export const publicApi = axios.create({
	baseURL: BASE_URL,
});