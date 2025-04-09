const { default: axios } = require("axios");

function sum(a,b) {
    return a + b
}

const BACKEND_URL = "http://localhost:3000"

// describe("Authentication", () => {
//     test('User is able to sign up only once', async () => {
//         const username = "kirat" + Math.random(); // kirat0.12331313
//         const password = "123456";
//         const response = await axios.post(`${BACKEND_URL}/api/v1/signup`, {
//             username,
//             password,
//             type: "admin"
//         })

//         expect(response.status).toBe(200)
//         const updatedResponse = await axios.post(`${BACKEND_URL}/api/v1/signup`, {
//             username,
//             password,
//             type: "admin"
//         })

//         expect(updatedResponse.status).toBe(400);
//     });

//     test('Signup request fails if the username is empty', async () => {
//         const username = `kirat-${Math.random()}` // kirat-0.12312313
//         const password = "123456"

//         const response = await axios.post(`${BACKEND_URL}/api/v1/signup`, {
//             password
//         })

//         expect(response.status).toBe(400)
//     })

//     test('Signin succeeds if the username and password are correct', async() => {
//         const username = `kirat-${Math.random()}`
//         const password = "123456"

//         await axios.post(`${BACKEND_URL}/api/v1/signup`, {
//             username,
//             password,
//             type: "admin"
//         });

//         const response = await axios.post(`${BACKEND_URL}/api/v1/signin`, {
//             username,
//             password
//         });

//         expect(response.status).toBe(200)
//         expect(response.data.token).toBeDefined()
        
//     })

//     test('Signin fails if the username and password are incorrect', async() => {
//         const username = `kirat-${Math.random()}`
//         const password = "123456"

//         await axios.post(`${BACKEND_URL}/api/v1/signup`, {
//             username,
//             password,
//             role: "admin"
//         });

//         const response = await axios.post(`${BACKEND_URL}/api/v1/signin`, {
//             username: "WrongUsername",
//             password
//         })

//         expect(response.status).toBe(403)
//     })
// })

describe("User metadata endpoint", () => {
    let token = "";
    let avatarId = "";

    beforeAll(async() => {
        const username = `kirat-${Math.random()}`
        const password = '123456'

        await axios.post(`${BACKEND_URL}/api/v1/signup`, {
            username,
            password,
            type: "admin"
        })

        const response = await axios.post(`${BACKEND_URL}/api/v1/signin`, {
            username,
            password
        })

        token = response.data.token

        const AvatarResponse = await axios.post(`${{BACKEND_URL}/api/v1/avatar}`, {
            "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm3RFDZM21teuCMFYx_AROjt-AzUwDBROFww&s",
            "name": "Timmy"
        })
        avatarId
        

    })

    test("User can't update their metadata with a wrong avatar id", async() => {
        const response = await axios.post(`${BACKEND_URL}/api/v1/user/metadata`, {
            avatarId: "123123123"
        }, {
            headers: {
                'authorization': `Bearer ${token}`
            }
        })
        expect(response.statusCode).toBe(400)
    })

    test("User can update their metadata with the right avatar id", async() => {
        const response = await axios.post(`${BACKEND_URL}/api/v1/user/metadata`, {
            avatarId
        }, {
            headers: {
                'authorization': `Bearer ${token}`
            }
        })
        expect(response.statusCode).toBe(400)
    })
    
    test("User is not able to update their metadata if the auth header is not present", async () => {
        const response = await axios.post(`${BACKEND_URL}/api/v1/user/metadata`, {
            avatarId
        })
        expect(response.statusCode).toBe(403)
    })

    test("test 3", () => {
    })
})
