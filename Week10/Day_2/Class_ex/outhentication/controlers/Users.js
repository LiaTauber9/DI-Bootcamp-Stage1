import Users from '../model/usersModel.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import jwt_decode from 'jwt-decode';

export const getUsers = async (req, res) => {
    try {
        const users = await Users.findAll({
            attributes: ['id', 'email']
        });
        res.json(users)
    } catch (e) {
        console.log(e);
        res.status(404).json({ msg: 'not found' })
    }
}

export const register = async (req, res) => {
    const { email, password } = req.body;
    const salt = await bcrypt.genSalt();
    const hash = await bcrypt.hash(password, salt)

    try {
        await Users.create({
            email: email.toLowerCase(),
            password: hash,
            name: req.body.name
        })
        res.json({ msg: 'success' })
    }
    catch (e) {
        console.log(e);
        res.status(404).json({ msg: 'email allready exist' })
    }
}

export const login = async (req, res) => {
    try {
        const user = await Users.findAll({
            where: {
                email: req.body.email.toLowerCase()
            }
        })
        const mach = await bcrypt.compare(req.body.password, user[0].password)
        if (!mach) return res.status(400).json({ msg: 'Wrong password' });
        const userId = user[0].id;
        const userEmail = user[0].email;
        const token = jwt.sign({ userId, userEmail }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '30s' });
        res.cookie('accessToken', token, {
            httpOnly: true,
            maxAge: 30 * 1000
        })
        res.json({ token: token })
    } catch (e) {
        console.log(e);
        res.status(404).json({ msg: 'Email not exist' })
    }
}

export const logOut = (req,res) => {
    const accessToken = req.cookies.accessToken;
    if(!accessToken) return res.status(204).json({msg:'cleared'})
    res.clearCookie('accessToken');
    res.status(200).json({msg:'cleared'});
}

export const token = (req,res)=>{
    const accessToken = req.cookies.accessToken || req.headers['x-access-token'];
    const decode = jwt_decode(accessToken);

    console.log(decode.userId,decode.email);

    const token = jwt.sign({userId:decode.userId, userEmail:decode.userEmail}, process.env.ACCESS_TOKEN_SECRET,{expiresIn:'30s'});
    res.cookie('accessToken', token, {httpOnly:true,maxAge:30*1000});
    res.status(200).json({token:token})
}


