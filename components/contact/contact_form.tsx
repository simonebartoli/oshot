import React, {
    ChangeEvent,
    createRef, FormEvent,
    LegacyRef, RefObject,
    useRef,
    useState
} from 'react';
import styles from "../../styles/contact.form.module.css"
import loader from "../../styles/loader.module.css"
import validator from "validator";
import isMobilePhone = validator.isMobilePhone;
import ReCAPTCHA from "react-google-recaptcha";

const ContactForm = () => {
    const [name, setName] = useState("")
    const [surname, setSurname] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [message, setMessage] = useState("")
    const [response, setResponse] = useState("")

    const recaptchaRef: LegacyRef<ReCAPTCHA> | undefined = createRef()
    const formRef: RefObject<HTMLFormElement> = useRef(null)
    const loaderRef: RefObject<HTMLDivElement> = useRef(null)
    const responseRef: RefObject<HTMLDivElement> = useRef(null)

    const [errors, setErrors] = useState({
        name: "", surname: "", email: "", phone: "", message: ""
    })
    const propertyCorrect = useRef({
        name: false, surname: false, email: false, phone: false, message: false
    })
    const [buttonDisabled, setButtonDisabled] = useState(true)

    const reset = () => {
        setName("")
        setSurname("")
        setEmail("")
        setPhone("")
        setMessage("")
        propertyCorrect.current = {
            name: false, surname: false, email: false, phone: false, message: false
        }
        setButtonDisabled(true)
        document.getElementById("name")!.style.border = "1px solid rgb(115 115 115)"
        document.getElementById("surname")!.style.border = "1px solid rgb(115 115 115)"
        document.getElementById("email")!.style.border = "1px solid rgb(115 115 115)"
        document.getElementById("phone")!.style.border = "1px solid rgb(115 115 115)"
        document.getElementById("message")!.style.border = "1px solid rgb(115 115 115)"
    }

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault() // FARE QUESTO
        recaptchaRef.current!.execute()
    }

    const onReCAPTCHAChange = async (captchaCode: string | null) => {
        if(!captchaCode) {
            return;
        }
        formRef.current!.classList.toggle("blur-sm")
        loaderRef.current!.style.display = "block"

        const urlencoded = new URLSearchParams({
            name: name.charAt(0).toUpperCase() + name.slice(1).toLowerCase(),
            surname: surname.charAt(0).toUpperCase() + surname.slice(1).toLowerCase(),
            email: email.toLowerCase(),
            phone: phone,
            message: message,
            captcha: captchaCode
        })

        const result = await fetch("/api/contact", {
            method: 'POST',
            headers: new Headers({
                ContentType: "application/x-www-form-urlencoded",
            }),
            body: urlencoded,
            redirect: 'follow',
        })
        const response = await result.json()
        if(response === "OK"){
            responseRef.current!.classList.remove("text-red-600")
            responseRef.current!.classList.add("text-green-600")
            setResponse("Your Request Has Been Received")
            reset()
        }else{
            responseRef.current!.classList.add("text-red-600")
            responseRef.current!.classList.remove("text-green-600")
            setResponse("We have a problem with your request, please try again later")
        }
        formRef.current!.classList.toggle("blur-sm")
        loaderRef.current!.style.display = "none"
        recaptchaRef.current!.reset();
    }

    const checkButtonValidity = () => {
        for(const value of Object.values(propertyCorrect.current)){
            if(!value) {
                setButtonDisabled(true)
                return
            }
        }
        setButtonDisabled(false)
    }
    const changeStyle = (element: HTMLInputElement | HTMLTextAreaElement, status: boolean) => {
        if(!status) element.style.border = "2px solid red"
        else element.style.border = "2px solid rgb(34 197 94)"
    }

    const onChangeName = (e: ChangeEvent<HTMLInputElement>) => {
        propertyCorrect.current.name = false
        const element = e.target
        if(name.length<3) {
            changeStyle(element, false)
            setErrors({...errors, name: "! Name is too short"})
        }
        else if (name.length > 25) {
            changeStyle(element, false)
            setErrors({...errors, name: "! Name is too long"})
        }
        else{
            changeStyle(element, true)
            setErrors({...errors, name: ""})
            propertyCorrect.current.name = true
        }
        checkButtonValidity()
    }
    const onChangeSurname = (e: ChangeEvent<HTMLInputElement>) => {
        propertyCorrect.current.surname = false
        const element = e.target

        if(surname.length<3) {
            changeStyle(element, false)
            setErrors({...errors, surname: "! Surname is too short"})
        }
        else if (surname.length > 25) {
            changeStyle(element, false)
            setErrors({...errors, surname: "! Surname is too long"})
        }
        else{
            changeStyle(element, true)
            setErrors({...errors, surname: ""})
            propertyCorrect.current.surname = true
        }
        checkButtonValidity()
    }
    const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
        propertyCorrect.current.email = false
        const element = e.target

        if(!validator.isEmail(email)) {
            changeStyle(element, false)
            setErrors({...errors, email: "! Email is not valid"})
        }
        else{
            changeStyle(element, true)
            setErrors({...errors, email: ""})
            propertyCorrect.current.email = true
        }
        checkButtonValidity()
    }
    const onChangePhone = (e: ChangeEvent<HTMLInputElement>) => {
        propertyCorrect.current.phone = false
        const element = e.target

        if(!isMobilePhone(phone)) {
            changeStyle(element, false)
            setErrors({...errors, phone: "! Phone is not valid"})
        }
        else{
            changeStyle(element, true)
            setErrors({...errors, phone: ""})
            propertyCorrect.current.phone = true
        }
        checkButtonValidity()
    }
    const onChangeMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
        propertyCorrect.current.message = false
        const element = e.target

        if(message.length<20) {
            changeStyle(element, false)
            setErrors({...errors, message: "! Message is too short"})
        }
        else if (message.length > 300) {
            changeStyle(element, false)
            setErrors({...errors, message: "! Message is too long"})
        }
        else{
            changeStyle(element, true)
            setErrors({...errors, message: ""})
            propertyCorrect.current.message = true
        }
        checkButtonValidity()
    }

    return (
        <div className="relative">
            <form ref={formRef} className="overflow-x-hidden flex flex-col w-full gap-6" onSubmit={onSubmit}>
                <ReCAPTCHA
                    ref={recaptchaRef}
                    size="invisible"
                    sitekey={process.env.NEXT_PUBLIC_GOOGLE_PUBLIC_KEY!}
                    onChange={onReCAPTCHAChange}
                />
                <div className="flex sm:flex-row flex-col gap-6 justify-between">
                    <div className={"flex flex-col gap-2 grow"}>
                        <div className="flex flex-row justify-between items-center">
                            <label htmlFor={"name"}>Name: <span className={"text-red-700"}>*</span></label>
                            <span className={"text-red-700 text-sm italic"}>{errors.name}</span>
                        </div>
                        <input id={"name"} value={name} onChange={(e) => setName(e.target.value)} onBlur={onChangeName} required={true} className={styles.contactForm} type="text" placeholder={"Insert your name here..."}/>
                    </div>
                    <div className={"flex flex-col gap-2 grow"}>
                        <div className="flex flex-row justify-between items-center">
                            <label htmlFor={"surname"}>Surname: <span className={"text-red-700"}>*</span></label>
                            <span className={"text-red-700 text-sm italic"}>{errors.surname}</span>
                        </div>
                        <input id={"surname"} value={surname} onChange={(e) => setSurname(e.target.value)} onBlur={onChangeSurname} required={true} className={styles.contactForm} type="text" placeholder={"Insert your surname here..."}/>
                    </div>
                </div>
                <div className={"flex flex-col gap-2 grow"}>
                    <div className="flex flex-row justify-between items-center">
                        <label htmlFor={"email"}>Email: <span className={"text-red-700"}>*</span></label>
                        <span className={"text-red-700 text-sm italic"}>{errors.email}</span>
                    </div>
                    <input id={"email"} value={email} onChange={(e) => setEmail(e.target.value)} onBlur={onChangeEmail} required={true} className={styles.contactForm} type="email" placeholder={"Insert your email here..."}/>
                </div>
                <div className={"flex flex-col gap-2 grow"}>
                    <div className="flex flex-row justify-between items-center">
                        <label htmlFor={"phone"}>Phone: <span className={"text-red-700"}>*</span></label>
                        <span className={"text-red-700 text-sm italic"}>{errors.phone}</span>
                    </div>
                    <input id={"phone"} value={phone} onChange={(e) => setPhone(e.target.value)} onBlur={onChangePhone} required={true} className={styles.contactForm} type="tel" placeholder={"Insert your phone number here..."}/>
                </div>
                <div className={"flex flex-col gap-2 grow"}>
                    <div className="flex flex-row justify-between items-center">
                        <label htmlFor={"message"}>Message: <span className={"text-red-700"}>*</span></label>
                        <span className={"text-red-700 text-sm italic"}>{errors.message}</span>
                    </div>
                    <textarea id={"message"} value={message} onChange={(e) => setMessage(e.target.value)} onBlur={onChangeMessage} required={true} className={styles.contactForm} name="" rows={10} placeholder={"Please state your request here..."}></textarea>
                </div>
                <input disabled={buttonDisabled} className="w-full disabled:text-black disabled:font-normal disabled:cursor-not-allowed disabled:bg-neutral-300 transition bg-green-500 font-semibold text-white cursor-pointer border-2 border-black p-4 shadow-lg" type="submit" value={"Submit Request"}/>
                <span ref={responseRef} className="text-lg text-center">{response}</span>
            </form>
            <div ref={loaderRef} className={loader.halfCircleSpinner} style={{display: "none", position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)"}}>
                <div className={loader.circle1}></div>
                <div className={loader.circle2}></div>
            </div>
        </div>
    );
};

export default ContactForm;