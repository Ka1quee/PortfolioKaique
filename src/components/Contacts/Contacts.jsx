import './Contacts.css'
import { MdEmail } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";

export default function Contacts() {
    return (
        <section className='contacts' id='contacts'>
            <div id="container"  data-aos="fade-down">
                <h1 className="title-projects">Contatos</h1>
                <div className="container-contacts">
                    <a href="https://www.linkedin.com/in/kaique--oliveira/" target='_blank'>
                        <div className="card-contact">
                            <FaLinkedinIn className='icon-contact' />
                            <h3>Linkedin</h3>
                            <p className='desc-contact'>Kaique Oliveira</p>
                        </div>
                    </a>

                    <a href="mailto:kaiqueoliveira375@gmail.com" target='_blank'>
                        <div className="card-contact">
                            <MdEmail className='icon-contact' />
                            <h3>Email</h3>
                            <p className='desc-contact'>Kaiqueoliveira375@gmail.com</p>
                        </div>
                    </a>

                    <a href="https://api.whatsapp.com/send/?phone=5511943956472&text&type=phone_number&app_absent=0" target='_blank'>
                        <div className="card-contact">
                            <RiWhatsappFill className='icon-contact' />
                            <h3>Whatsapp</h3>
                            <p className='desc-contact'>(11)94395-6472</p>
                        </div>
                    </a>

                    <a href="https://github.com/Ka1quee" target='_blank'>
                        <div className="card-contact">
                            <FaGithub className='icon-contact' />
                            <h3>GitHub</h3>
                            <p className='desc-contact'>ka1quee</p>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    )
}