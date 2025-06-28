import { FaGithub, FaLinkedin, FaAws } from "react-icons/fa6";
import {
    SiSpringboot,
    SiDjango,
    SiReact,
    SiMysql,
    SiHtml5,
    SiCss3,
    SiCplusplus,
} from "react-icons/si";

import { FaJava } from "react-icons/fa";

const Index = () => (
    <div style={styles.container}>
        <div style={styles.header}>
            <div>
                <h1 style={styles.name}>udaykallam.tech</h1>
                <p style={styles.bio}>
                    Hello, I'm <strong>Uday Reddy Kallam</strong>. I'm a final‑year Computer
                    Science student with a passion for building full‑stack applications using
                    Spring Boot, Django, and React. I enjoy solving real‑world problems
                    through code and exploring cloud technologies.<br />
                    Feel free to reach out on&nbsp;
                    <a
                        href="https://linkedin.com/in/udaykallam"
                        target="_blank"
                        rel="noreferrer"
                    >
                        LinkedIn
                    </a>
                    .
                </p>
            </div>
            <img
                src="src/assets/image/pic.png"
                alt="Uday Reddy Kallam"
                style={styles.avatar}
            />
        </div>

        <h2 style={styles.sectionTitle}>Projects</h2>
        <ul style={styles.list}>
            <li>
                <a
                    href="https://github.com/udaykallam/ArtGallery"
                    target="_blank"
                    rel="noreferrer"
                >
                    Art Gallery Management System
                </a>
            </li>
            <li>
                <a
                    href="https://github.com/udaykallam/Student-Feedback-And-Analysis-Management  "
                    target="_blank"
                    rel="noreferrer"
                >
                    Student Feedback and Analysis System
                </a>
            </li>
        </ul>

        <h2 style={styles.sectionTitle}>Skills</h2>
        <div style={styles.skillsGrid}>
            {skillIcons.map(({ Icon, label }) => (
                <div key={label} style={styles.skillItem}>
                    <Icon size={40} />
                    <span style={styles.skillLabel}>{label}</span>
                </div>
            ))}
        </div>

        <h2 style={styles.sectionTitle}>Certifications</h2>
        <ul style={styles.list}>
            <li>
                <a
                    href="https://www.credly.com/badges/cc99eff0-5e1c-42db-8c28-5c682d9e4a11/public_url"
                    target="_blank"
                    rel="noreferrer"
                >
                    AWS Certified Cloud Practitioner
                </a>
            </li>
            <li>
                <a
                    href="https://www.credly.com/badges/0841aa96-3253-42ad-8dc2-ae805eed4493/public_url"
                    target="_blank"
                    rel="noreferrer"
                >
                    Red Hat Certified Enterprise Application Developer (EX183)
                </a>
            </li>
            <li>
                <a
                    href="https://www.salesforce.com/trailblazer/udaykallam"
                    target="_blank"
                    rel="noreferrer"
                >
                    Salesforce AI Associate
                </a>
            </li>
            <li>
                <a
                    href="https://api.badgr.io/public/assertions/YQNLSmIDSM-AY1gyUC5Fkg"
                    target="_blank"
                    rel="noreferrer"
                >
                    Postman API Fundamentals Student Expert
                </a>
            </li>
        </ul>

        <div style={styles.connectSection}>
            <h2 style={styles.sectionTitle}>Connect Now</h2>
            <div style={styles.icons}>
                <a
                    href="https://github.com/udaykallam"
                    target="_blank"
                    rel="noreferrer"
                    style={styles.iconLink}
                >
                    <FaGithub size={30} />
                </a>
                <a
                    href="https://linkedin.com/in/udaykallam"
                    target="_blank"
                    rel="noreferrer"
                    style={styles.iconLink}
                >
                    <FaLinkedin size={30} />
                </a>
            </div>
        </div>
    </div>
);

const skillIcons = [
    { Icon: SiSpringboot, label: "Spring Boot" },
    { Icon: SiDjango, label: "Django" },
    { Icon: SiReact, label: "React" },
    { Icon: FaAws, label: "AWS" },
    { Icon: SiMysql, label: "MySQL" },
    { Icon: FaJava, label: "Java" },
    { Icon: SiHtml5, label: "HTML5" },
    { Icon: SiCss3, label: "CSS3" },
    { Icon: SiCplusplus, label: "C++" },
];

const styles = {
    container: {
        maxWidth: "800px",
        margin: "0 auto",
        padding: "40px 20px",
        fontFamily: "Arial, sans-serif",
        lineHeight: 1.6,
        color: "white",
    },
    header: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "40px",
    },
    name: { fontSize: "2rem", marginBottom: "10px" },
    bio: { fontSize: "1rem", maxWidth: "600px" },
    avatar: {
        width: "100px",
        height: "100px",
        borderRadius: "50%",
        objectFit: "cover",
        marginLeft: "20px",
    },
    sectionTitle: { fontSize: "1.5rem", marginTop: "40px", marginBottom: "10px" },
    list: { listStyle: "none", paddingLeft: 0 },
    skillsGrid: {
        display: "flex",
        flexWrap: "wrap",
        gap: "1px",
        marginTop: "15px",
    },
    skillItem: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "80px",
    },
    skillLabel: { marginTop: "6px", fontSize: "0.75rem" },
    connectSection: { marginTop: "50px", textAlign: "center" },
    icons: {
        display: "flex",
        justifyContent: "center",
        gap: "20px",
        marginTop: "10px",
    },
    iconLink: {
        color: "white",
        textDecoration: "none",
        transition: "transform 0.2s",
    },
};

export default Index;
