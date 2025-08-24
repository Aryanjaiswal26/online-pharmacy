const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const bcrypt = require('bcrypt');
const User = require('./modals/userModal.js');
const session = require('express-session');

mongoose.connect('mongodb://localhost:27017/online-pharmacy')
    .then(() => {
        console.log("Connected to Database");
    })
    .catch(err => {
        console.log("Connection Failed");
        console.log(err);
    })

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(session({ secret: 'user-data', resave: false, saveUninitialized: false }));


const requireLogin = (req, res, next) => {
    if (!req.session.user) {
        return res.redirect('/login');
    }
    next();
}

//pharmacy routes

app.get('/pharmacy/home', (req, res) => {
    const currentUser = req.session.user;
    res.render('pharmacy/home', { currentUser });
})
app.get('/pharmacy/contact', (req, res) => {
    const currentUser = req.session.user;
    res.render('pharmacy/contactus', { currentUser });
})

app.get('/pharmacy/about', requireLogin, (req, res) => {
    const currentUser = req.session.user;
    res.render('pharmacy/aboutus',{currentUser});
})

app.get('/pharmacy/sales', requireLogin, (req, res) => {
    const currentUser = req.session.user;
    res.render('pharmacy/sales',{currentUser});
})

app.get('/pharmacy/payment', requireLogin, (req, res) => {
    const currentUser = req.session.user;
    res.render('pharmacy/payment',{currentUser});
})

app.get('/successpay', requireLogin, (req, res) => {
    const currentUser = req.session.user;
    res.render('pharmacy/successpay',{currentUser});
})

//User models

app.get('/register', (req, res) => {
    res.render('Auth/register');
})

app.post('/register', async (req, res) => {
    const { firstName, lastName, email, password } = req.body;
    const hash = await bcrypt.hash(password, 12);
    const user = new User({
        firstName,
        lastName,
        email,
        password: hash,
    })
    await user.save();
    req.session.user = user;
    res.redirect('/pharmacy/home');
})

app.get('/login', (req, res) => {
    res.render('Auth/login');
})


app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
        return res.redirect('/login');
    }
    const validPassword = bcrypt.compare(password, user.password);
    if (!validPassword) {
        return res.redirect('/login');
    }
    req.session.user = user;
    res.redirect('/pharmacy/home');
})

app.get('/logout', (req, res) => {
    req.session.user = null;
    res.redirect('/login');
})

app.listen(3000, () => {
    console.log('Listening on Port 3000');
})