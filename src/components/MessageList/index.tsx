import { useEffect } from "react";
import { api } from "../../services/api";

import styles from "./styles.module.scss";

import logoImg from "../../assets/logo.svg";

export function MessageList() {
  useEffect(() => {}, [])

  return (
    <div className={styles.messageListWrapper}>
      <img src={logoImg} alt="Do While 2021" />

      <ul className={styles.messageList}>
        <li className={styles.message}>
          <p className={styles.messageContent}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus
            commodi dolore voluptate expedita, doloremque ipsam.
          </p>
          <div className={styles.messageUser}>
            <div className={styles.userImage}>
              <img src="https://github.com/lucasjc98.png" alt="Lucas Costa" />
            </div>
            <span>Lucas Costa</span>
          </div>
        </li>

        <li className={styles.message}>
          <p className={styles.messageContent}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus
            commodi dolore voluptate expedita, doloremque ipsam.
          </p>
          <div className={styles.messageUser}>
            <div className={styles.userImage}>
              <img src="https://github.com/lucasjc98.png" alt="Lucas Costa" />
            </div>
            <span>Lucas Costa</span>
          </div>
        </li>

        <li className={styles.message}>
          <p className={styles.messageContent}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus
            commodi dolore voluptate expedita, doloremque ipsam.
          </p>
          <div className={styles.messageUser}>
            <div className={styles.userImage}>
              <img src="https://github.com/lucasjc98.png" alt="Lucas Costa" />
            </div>
            <span>Lucas Costa</span>
          </div>
        </li>
      </ul>
    </div>
  );
}
