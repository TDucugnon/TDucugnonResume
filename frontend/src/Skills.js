import './style/skills.css';
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faCode, faHandFist, faPeopleGroup,faEye, faEyeSlash, faChevronRight, faChevronDown, faArrowUpRightDots } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import logoPHP from './public/images/php-logo-vector.svg';
import logoLaravel from './public/images/laravelLogo.png';
import logoSymfony from './public/images/symfony.svg';
import logoJava from './public/images/java.svg';
import logoPython from './public/images/python.png';
import mySQL from './public/images/MySQL.png';
import logoReact from './public/images/react.png';
import logoJavascript from './public/images/javascript.png';
import htmlCss from './public/images/htmlCss.png';
import { Link } from 'react-scroll';

function Skills() 
{
    const { t, i18n } = useTranslation();

    const [isBackendOpen, setIsBackendOpen] = useState(true);
    const [isFrontendOpen, setIsFrontendOpen] = useState(true);
    const [isSoftSkillOpen, setIsSoftSkillOpen] = useState(true);
    const [isAnimationEnabled, setIsAnimationEnabled] = useState(false);
    const [isAnimationInProgress] = useState(false);

    const toggleBackendOpen = () => {
        if (!isAnimationInProgress) {
            setIsBackendOpen(!isBackendOpen);
        }
    };

    const togglefrontendOpen = () => {
        if (!isAnimationInProgress) {
            setIsFrontendOpen(!isFrontendOpen);
        }
    };

    const toggleSoftSkillOpen = () => {
        if (!isAnimationInProgress) {
            setIsSoftSkillOpen(!isSoftSkillOpen);
        }
    };

    useEffect(() => {
        setIsAnimationEnabled(false);
    }, []);

    const skillsBackendData = [
        {
            label: t('skills.php'),
            logo: logoPHP,
            githubLinks: ["https://github.com/TDucugnon/projetMesi"],
            skillClassName: "skill-php",
        },
        {
            label: t('skills.laravel'),
            logo: logoLaravel,
            githubLinks: ["https://github.com/TDucugnon/myblog"],
            skillClassName: "skill-laravel",
        },
        {
            label: t('skills.symfony'),
            logo: logoSymfony,
            githubLinks: [],
            skillClassName: "skill-symfony",
        },
        {
            label: t('skills.java'),
            logo: logoJava,
            githubLinks: ["https://github.com/TDucugnon/ipi-java-210-ex-2", "https://github.com/TDucugnon/eval-330-th-b2-2022-pyrolyse", "https://github.com/TDucugnon/ipi-java-350-ex"],
            skillClassName: "skill-java",
        },
        {
            label: t('skills.python'),
            logo: logoPython,
            githubLinks: [""],
            skillClassName: "skill-python",
        },
        {
            label: t('skills.mySQL'),
            logo: mySQL,
            githubLinks: ["https://github.com/TDucugnon/projetMesi", "https://github.com/TDucugnon/myblog"],
            skillClassName: "skill-mySQL",
        },
    ];

    const skillsFrontendData = [
        {
            label: t('skills.react'),
            logo: logoReact,
            githubLinks: ["https://github.com/TDucugnon/thomasDucugnonResume"],
            skillClassName: "skill-react",
        },
        {
            label: t('skills.javascript'),
            logo: logoJavascript,
            githubLinks: ["https://github.com/TDucugnon/thomasDucugnonResume"],
            skillClassName: "skill-javascript",
        },
        {
            label: t('skills.htmlCss'),
            logo: htmlCss,
            githubLinks: ["https://github.com/TDucugnon/thomasDucugnonResume"],
            skillClassName: "skill-htmlCss",
        },
    ];

    const softSkills = [
        {
            label: t('skills.teamWork'),
            icon: faPeopleGroup,
            description: ""
        },
        {
            label: t('skills.motivation'),
            icon: faHandFist,
            description: ""
        },
        {
            label: t('skills.selfLearner'),
            icon: faArrowUpRightDots,
            description: ""
        }
    ]

    return (
        <div className='container' id='skillContainer'>
            <div className='skillsTitle'>
                {t('skills.title')}
                <FontAwesomeIcon className='skillsIcon' icon={faCode} />
            </div>
            <div className='backend'>
                <div className='backendHead'>
                    {t('skills.backend')}
                    <FontAwesomeIcon className='seeSkills' icon={!isBackendOpen ? faEye : faEyeSlash} onClick={toggleBackendOpen} />
                </div>
                <div className={isBackendOpen ? 'backendContentContainer' : 'hide'}>
                    {skillsBackendData.map((skill, index) => (
                        <SkillComponent
                        {...skill}
                        isAnimationEnabled={isAnimationEnabled}
                        t={t}
                        i18n={i18n}
                        index={index}
                        />
                    ))}
                </div>
                <div className='frontEndHead'>
                    {t('skills.frontend')}
                    <FontAwesomeIcon className='seeSkills' icon={!isFrontendOpen ? faEye : faEyeSlash} onClick={togglefrontendOpen} />
                </div>
                <div className={isFrontendOpen ? 'backendContentContainer' : 'hide'}>
                    {skillsFrontendData.map((skill, index) => (
                        <SkillComponent
                            key={index}
                            {...skill}
                            isAnimationEnabled={isAnimationEnabled}
                            t={t}
                            i18n={i18n}
                            index={index}
                        />
                    ))}
                </div>
                <div className='softSkillsHead'>
                    {t('skills.softSkills')}
                    <FontAwesomeIcon className='seeSkills' icon={!isSoftSkillOpen ? faEye : faEyeSlash} onClick={toggleSoftSkillOpen} />
                </div>
                <div className={isSoftSkillOpen ? 'backendContentContainer' : 'hide'}>
                    {softSkills.map((skill, index) => (
                        <div className={`row ${isAnimationEnabled ? `opacity` : 'hidden'}` }>
                            <div className='softSkillsIcon'>
                                <FontAwesomeIcon icon={skill.icon} ></FontAwesomeIcon>
                            </div>
                            <div className='softSkillsLabel'>
                                {skill.label}
                            </div>
                            <div className='softSkillsDescription'>
                                {skill.description}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

const SkillComponent = ({ label, logo, githubLinks, skillClassName, isAnimationEnabled, t, i18n, index }) => {

    const [isProjectOpen, setIsProjectOpen] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const toggleProject = () => {
        setIsProjectOpen(!isProjectOpen);
    };

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <div className={`row ${isAnimationEnabled ? `opacity` : 'hidden'}` }>
            <div className='skillImg'>
                <img className='logoSkills' src={logo} alt="Logo" />
            </div>
            <div className='backendContent'>{label}</div>
            <div className="skill-bar">
                <span className={`skill-per ${skillClassName}`}></span>
            </div>
            {githubLinks.length > 0 ? (
                githubLinks[0] !== '' ? (
                    <div className={'project'} onClick={toggleProject} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                        <FontAwesomeIcon className="openProject" icon={isProjectOpen ? faChevronDown : faChevronRight} onClick={toggleProject}/>
                        {t('skills.project')}
                        {isProjectOpen && (
                            <div className='projectGithub' style={{ opacity: isHovered ? 0.7 : 1 }}>
                                {githubLinks.map((link, index) => (
                                    <div className='projectGithub' style={{ opacity: isHovered ? 0.7 : 1 }}>
                                        <a key={index} href={link} target="_blank" rel="noopener noreferrer">
                                            <FontAwesomeIcon className='githubIcon' icon={faGithub} />
                                        </a>
                                    </div>
                                ))}
                            </div>   
                        )}
                    </div>
                ) : (
                    <div></div>
                )
            ) : (
                <div className='project'>
                    <Link to="workExperienceContainer" spy={true} smooth={true} duration={400} offset={-140}>
                        <FontAwesomeIcon className="openProject" icon={faChevronRight}/>
                        {t('experience.title')}
                        <FontAwesomeIcon className='menuIcon' icon={faBriefcase} />
                    </Link>
                </div>
                )
            }
        </div>
    );
};

export default Skills;
