//- File: index router Page
//- Author: Prabhjot Singh Bhangu
//- Site: prabhjot-portfolio1.herokuapp.com
//- Description: index.js of my Portfolio Website

var express = require('express');
var router = express.Router();

/* home page */
router.get('/', function(req, res, next) {
    const params = {
        title: 'Online Portfolio',
        myTitle: 'Full Stack Developer',
        myQuality: 'I want to make things that make a difference. Mission-driven full stack developer with a passion for thoughtful UI design, collaboration',
        myTitle2: 'Services',
        myQuality2: 'As a web developer, I enjoy using my obsessive attention to detail, my unequivocal love for making things, and my mission-driven work ethic to literally change the world. That is why I’m excited to make a big impact at a high growth company.Current Focus: Accessibility // React // Design Systems',
    };
  res.render('index', params);
});


/* ABOUT page */
router.get('/about', function(req, res, next) {
    const params = {
        title: 'About me',
        what: 'my portfolio',
        mainline:'I Strive to make every pixel look beautiful',
        myTitle: 'Full Stack Developer',
        myQuality: 'Mission-driven full stack developer with a passion for thoughtful UI design, collaboration, and teaching.I’ve always sought out opportunities and challenges that are meaningful to me. Although my professional path has taken many twists and turns — from touring and recording artist, to employee of the year at a non-profit, to deans scholar at UPenn, to small business owner and entrepreneur — I haveve never stopped engaging my passion to help others and solve problems. As a web developer, I enjoy using my obsessive attention to detail, my unequivocal love for making things, and my mission-driven work ethic to literally change the world. That is why I’m excited to make a big impact at a high growth company.'
    };
  res.render('about', params);
});


/* SERVICE page */
router.get('/service', function(req, res, next) {
    const params = {
        title: 'Services that I offer',
        myTitle: 'Full Stack Developer',
        myQuality: 'I want to make things that make a difference.'
    };
  res.render('service', params);
});


/* CONTACT page */
router.get('/contact', function(req, res, next) {
    const qualities = ['Full Stack Developer', '55% DESIGNER', '45% CODER'];
    const params = {
        title: 'Contact me',
        qualities,
        what: 'my portfolio',
        myTitle: 'Full Stack Developer',
        myQuality: 'I want to make things that make a difference.'
    };
  res.render('contact', params);
});
module.exports = router;
