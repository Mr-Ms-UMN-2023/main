import styles from '../styles/footer.module.css'
import Image from "next/image";
import logo from "../public/Assets/ShiningSoon/logomrms.png";

const Footer = () => {
    return (
      <footer className={styles.footer}>
        {/* Top */}

        <div className={styles.top}>
          <span>Mr. & Ms. UMN 2023</span>
        </div>

        {/* Content */}

        <div className={styles.content}>
          <Image src={logo} width={378} height={477} alt="logo mrms" />
          <p className={styles.judulkontak}>Hubungi Kami Melalui</p>
          <div className={styles.medcon}>
            <a href="mailto:mrmsumn@umn.ac.id">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="30"
                viewBox="0 0 65 52"
                fill="none"
              >
                <path
                  d="M62.8423 0.950439H2.15766C0.967402 0.950439 0 1.91869 0 3.10895V7.45128C0 7.65135 0.216948 7.88096 0.394221 7.97382L32.2915 26.1932C32.3742 26.2414 32.4671 26.2633 32.5599 26.2633C32.6545 26.2633 32.7499 26.2388 32.8334 26.189L63.7667 7.99155C63.9406 7.89447 64.4015 7.63784 64.5745 7.51966C64.7839 7.377 65 7.24784 65 6.99206V3.1081C65 1.91869 64.0326 0.950439 62.8423 0.950439Z"
                  fill="#F0CD82"
                />
                <path
                  d="M64.7307 13.9985C64.5619 13.9006 64.3559 13.9048 64.1862 14.0019L46.681 24.3015C46.5409 24.3825 46.4438 24.526 46.4201 24.6881C46.399 24.8493 46.4497 25.0139 46.5586 25.1329L64.0664 44.0057C64.1702 44.118 64.312 44.1779 64.4606 44.1779C64.5273 44.1779 64.5948 44.1653 64.6581 44.1416C64.8649 44.0598 65 43.8614 65 43.6385V14.467C65 14.2729 64.8979 14.0948 64.7307 13.9985Z"
                  fill="#F0CD82"
                />
                <path
                  d="M41.6363 27.7599C41.4641 27.5734 41.1872 27.532 40.9686 27.6603L33.952 31.7891C33.1281 32.2736 32.0729 32.2779 31.2439 31.8068L25.0689 28.2791C24.8646 28.1635 24.6072 28.1913 24.4349 28.3517L0.985986 50.1022C0.861051 50.2187 0.798583 50.3867 0.817155 50.5564C0.835726 50.7261 0.934492 50.878 1.08222 50.9633C1.44689 51.1777 1.79891 51.2798 2.15683 51.2798H62.221C62.4363 51.2798 62.6305 51.1524 62.7149 50.9548C62.801 50.759 62.7622 50.5302 62.6153 50.3732L41.6363 27.7599Z"
                  fill="#F0CD82"
                />
                <path
                  d="M19.2755 25.7788C19.4021 25.6631 19.4654 25.4926 19.4468 25.3229C19.4282 25.1524 19.3269 25.0013 19.1784 24.9152L0.804481 14.4206C0.640714 14.3261 0.433896 14.3278 0.266753 14.424C0.101299 14.5202 0 14.6984 0 14.89V42.4263C0 42.6399 0.126623 42.8341 0.322467 42.9193C0.391688 42.9506 0.46513 42.9658 0.539415 42.9658C0.671948 42.9658 0.80448 42.916 0.905779 42.8214L19.2755 25.7788Z"
                  fill="#F0CD82"
                />
              </svg>
            </a>
            <a href="https://www.instagram.com/mrmsumn/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 55 55"
                fill="none"
              >
                <path
                  d="M39.0287 2.5H15.9714C8.5314 2.5 2.5 8.5314 2.5 15.9714V39.0286C2.5 46.4686 8.5314 52.5 15.9714 52.5H39.0286C46.4686 52.5 52.5 46.4686 52.5 39.0286V15.9714C52.5001 8.5314 46.4687 2.5 39.0287 2.5Z"
                  stroke="#F0CD82"
                  stroke-width="4.44756"
                  stroke-miterlimit="10"
                />
                <path
                  d="M27.5001 39.569C34.1656 39.569 39.5691 34.1656 39.5691 27.5C39.5691 20.8345 34.1656 15.431 27.5001 15.431C20.8345 15.431 15.4311 20.8345 15.4311 27.5C15.4311 34.1656 20.8345 39.569 27.5001 39.569Z"
                  stroke="#F0CD82"
                  stroke-width="4.44756"
                  stroke-miterlimit="10"
                />
                <path
                  d="M42.1552 15.4311C43.5835 15.4311 44.7414 14.2732 44.7414 12.8449C44.7414 11.4166 43.5835 10.2587 42.1552 10.2587C40.7268 10.2587 39.5689 11.4166 39.5689 12.8449C39.5689 14.2732 40.7268 15.4311 42.1552 15.4311Z"
                  fill="#F0CD82"
                />
              </svg>
            </a>
            <a href="https://www.youtube.com/@MrMsUMN-us2mh">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="30"
                viewBox="0 0 63 51"
                fill="none"
              >
                <path
                  d="M47.375 0.5H16.125C6.75 0.5 0.5 6.75 0.5 16.125V34.875C0.5 44.25 6.75 50.5 16.125 50.5H47.375C56.75 50.5 63 44.25 63 34.875V16.125C63 6.75 56.75 0.5 47.375 0.5ZM37.6563 28.7187L29.9375 33.3438C26.8125 35.2188 24.2499 33.7812 24.2499 30.125V20.8438C24.2499 17.1875 26.8125 15.75 29.9375 17.625L37.6563 22.25C40.625 24.0625 40.625 26.9375 37.6563 28.7187Z"
                  fill="#F0CD82"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Bottom */}

        <div className={styles.bottom}>
          <span>Copyright @ Mr. & Ms UMN 2023. By Wisanggeni</span>
        </div>
      </footer>
    );

}
export {Footer as Footer};