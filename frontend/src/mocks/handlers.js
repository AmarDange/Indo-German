import { rest } from "msw";

const baseURL = "/api/";

export const handlers = [
    rest.get(`${baseURL}dj-rest-auth/user/`, (req, res, ctx) => {
        return res(
            ctx.json({
                "pk": 1,
                "username": "Amar",
                "email": "",
                "first_name": "",
                "last_name": "",
                "profile_id": null,
                "profile_image": null
            })
        );
    }),
    rest.post(`${baseURL}dj-rest-auth/logout/`, (req, res, ctx) => {
        return res(ctx.status(200));
    }),
];