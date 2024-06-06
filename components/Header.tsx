import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import styles from "../styles/Header.module.css";

const profileData = {
  name: "Vikum Warnakula",
  title: "Software Engineer in Test @ Deputy",
  profileImgSrc: "/profile.jpg",
  socialLinks: [
    { href: "https://www.linkedin.com/in/vikum-warnakula/", label: "LinkedIn" },
    { href: "https://github.com/swvikum", label: "GitHub" },
    {
      href: "https://www.instagram.com/sky_mantis?igsh=c2l2a3RjZXh5aGxi&utm_source=qr",
      label: "SkyMantis",
    },
  ],
};

interface HeaderProps {
  setHeaderHeight: (height: number) => void;
}

const Header: React.FC<HeaderProps> = ({ setHeaderHeight }) => {
  const { name, title, profileImgSrc, socialLinks } = profileData;
  const [isHidden, setIsHidden] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsHidden(true);
    } else {
      setIsHidden(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    if (headerRef.current) {
      setHeaderHeight(headerRef.current.offsetHeight);
    }
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [setHeaderHeight]);

  const renderSocialLinks = () =>
    socialLinks.map((link, index) => (
      <span key={index} className={styles.socialLinks}>
        <a href={link.href}>{link.label}</a>
        {index < socialLinks.length - 1 && " | "}
      </span>
    ));

  return (
    <header
      ref={headerRef}
      className={`${styles.header} ${isHidden ? styles.hidden : ""}`}
    >
      <Image
        src={profileImgSrc}
        alt="Profile Picture"
        className={styles.profileImg}
        width={200}
        height={200}
        quality={100} // Optional: Adjust quality as needed
      />
      <h1>{name}</h1>
      <p>{title}</p>
      <p>{renderSocialLinks()}</p>
    </header>
  );
};

export default Header;
