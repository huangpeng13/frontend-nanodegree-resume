/*
This is empty on purpose! Your code to build the resume will go here.
 */
var dataPlaceholder = '%data%';

var bio = {
    name: 'Peng Hung',
    role: 'Software Engineer',
    contacts: {
        mobile: '18837106606',
        email: 'huangpeng13@yeah.net',
        github: 'https://github.com/huangpeng13',
        location: 'Zhengzhou China'
    },
    welcomeMessage: 'Good Good Study, Day Day Up:)',
    skills: ['ASM', 'C/C++/C#', 'Android', 'PHP', 'Front-End'],
    biopic: 'images/fry.jpg',
    display: function() {
        $('#topContacts')
            .before(HTMLheaderName.replace(dataPlaceholder, this.name))
            .before(HTMLheaderRole.replace(dataPlaceholder, this.role))
            .append(HTMLmobile.replace(dataPlaceholder, this.contacts.mobile))
            .append(HTMLemail.replace(dataPlaceholder, this.contacts.email))
            .append(HTMLgithub.replace(dataPlaceholder, this.contacts.github))
            .append(HTMLlocation.replace(dataPlaceholder, this.contacts.location))
            .after(HTMLskillsStart)
            .after(HTMLwelcomeMsg.replace(dataPlaceholder, this.welcomeMessage))
            .after(HTMLbioPic.replace(dataPlaceholder, this.biopic));
        var $skills = $('#skills');
        this.skills.forEach(function(el) {
            $skills.append(HTMLskills.replace(dataPlaceholder, el));
        });
    }
};

var work = {
    jobs: [{
            employer: 'Tvia Inc.',
            title: 'Senior Software Engineer',
            dates: 'September 2001 - June 2003',
            location: 'Hefei China',
            description: 'BSP development'
        },
        {
            employer: 'MTK Inc.',
            title: 'Software Engineer',
            dates: 'July 2003 - June 2004',
            location: 'Hefei China',
            description: 'Application development'
        }
    ],
    display: function() {
        var $workExperience = $('#workExperience');
        this.jobs.forEach(function(el) {
            $(HTMLworkStart)
                .append(HTMLworkEmployer.replace(dataPlaceholder, el.employer))
                .append(HTMLworkTitle.replace(dataPlaceholder, el.title))
                .append(HTMLworkDates.replace(dataPlaceholder, el.dates))
                .append(HTMLworkLocation.replace(dataPlaceholder, el.location))
                .append(HTMLworkDescription.replace(dataPlaceholder, el.description))
                .appendTo($workExperience);
        });
    }
};

var projects = {
    projects: [{
            title: 'Sales Management System',
            dates: '2006 - 2007',
            description: 'A web system to manage sales data.',
            images: ''
        },
        {
            title: 'Android switch for relay controller',
            dates: '2014',
            description: 'Control relay by android app.',
            images: ''
        }
    ],
    display: function() {
        var $projects = $('#projects');
        this.projects.forEach(function(el) {
            $(HTMLprojectStart)
                .append(HTMLprojectTitle.replace(dataPlaceholder, el.title))
                .append(HTMLprojectDates.replace(dataPlaceholder, el.dates))
                .append(HTMLprojectDescription.replace(dataPlaceholder, el.description))
                .append(el.images || HTMLprojectImage.replace(dataPlaceholder, el.images))
                .appendTo($projects);
        });
    }
};

var education = {
    schools: [{
        name: 'Zhengzhou University',
        location: 'Zhengzhou China',
        degree: 'Bachelor',
        majors: ['Software'],
        dates: 'September 1997 - June 2001',
        url: 'http://www.zzu.edu.cn/'
    }],
    onlineCourses: [{
        title: 'Front-End Nanodegree',
        school: 'Udacity',
        dates: 'December 2016 - Jauanary 2017',
        url: 'http://cn.udacity.com/'
    }],
    display: function() {
        var $education = $('#education');
        this.schools.forEach(function(el) {
            $(HTMLschoolStart)
                .append(HTMLschoolName.replace(dataPlaceholder, el.name).replace('#', el.url))
                .append(HTMLschoolDegree.replace(dataPlaceholder, el.degree))
                .append(HTMLschoolDates.replace(dataPlaceholder, el.dates))
                .append(HTMLschoolLocation.replace(dataPlaceholder, el.location))
                .append(HTMLschoolMajor.replace(dataPlaceholder, el.majors.join(', ')))
                .appendTo($education);
        });
        this.onlineCourses.length > 0 && $education.append(HTMLonlineClasses);
        this.onlineCourses.forEach(function(el) {
            $(HTMLschoolStart)
                .append(HTMLonlineTitle.replace(dataPlaceholder, el.title).replace('#', el.url))
                .append(HTMLonlineSchool.replace(dataPlaceholder, el.school))
                .append(HTMLonlineDates.replace(dataPlaceholder, el.dates))
                .append(HTMLonlineURL.replace(dataPlaceholder, el.url).replace('#', el.url))
                .appendTo($education);
        });
    }
};

bio.display();
work.display();
projects.display();
education.display();

(function() {
    $('#mapDiv').append(googleMap);
})();