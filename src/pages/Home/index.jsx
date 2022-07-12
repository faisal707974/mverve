import React, { useState } from 'react'
import './index.scss'
import img from '../../images/WebGraphic.png'
import Input from '../../components/input'
import { useForm } from 'react-hook-form'
import icon from '../../images/see_password_icon.png'


function Home() {

    const { register, handleSubmit, formState: { errors } } = useForm({ criteriaMode: "all" });
    const [pwdView, setPwdView] = useState(false)
    const [cnfPwdView, setCnfPwdView] = useState(false)

    function togglePwdView() {
        setPwdView(state => !state)
    }
    function toggleCnfPwdView() {
        setCnfPwdView(state => !state)
    }

    function onSubmit(data) {
        console.log(data)
    }
    console.log(errors)



    return (
        <>
            <div className='Home'>
                <div className='TitleLogo'>
                    <img src={img} alt="" />
                </div>
                <div className='formSection'>
                    <h4>Create an account</h4>
                    <form action="" onSubmit={handleSubmit(onSubmit)}>
                        <div className='inputs'>
                            <Input type='text' label={'First Name'} placeHolder={'First Name'} className='firstName' register={register} errors={errors}
                                rules={{ required: true, pattern: { value: /^[a-zA-Z]+$/, message: 'invalid format' } }}
                            />
                            <Input type='text' label={'Last Name'} placeHolder={'Last Name'} className='lastName' register={register} errors={errors}
                                rules={{ required: true, pattern: { value: /^[a-zA-Z]+$/, message: 'invalid format' } }}
                            />
                            <Input type='text' label={'Age'} placeHolder={'18 - 100'} className='age' register={register} errors={errors}
                                rules={{ required: true, max: { value: 100, message: 'cannot greater than 100' }, min: { value: 18, message: 'cannot lesser than 18' } }}
                            />
                            <Input type='text' label={'Mobile Number'} placeHolder={'xxxxx xxxxx'} className='mobile' register={register} errors={errors}
                                rules={{ required: true, pattern: { value: /^[0-9]{10}$/, message: 'invalid format' } }}
                            />
                            <Input type='text' label={'Email'} placeHolder={'abc@xxx.com'} className='email' register={register} errors={errors}
                                rules={{ required: true, pattern: { value: /^[a-zA-Z]+@[a-zA-Z]+.com$/, message: 'invalid format' } }}
                            />
                            <Input type='text' label={'Description'} className='description' register={register} errors={errors}
                                rules={{ required: true }}
                            />
                            <Input type={pwdView ? 'text' : 'password'} label={'Password'} className='password' register={register} errors={errors}
                                rules={{ required: true, pattern: { value: /^[0-9a-zA-Z]{8}$/, message: 'should contain 8 characters' } }}
                            />
                            <Input type={cnfPwdView ? 'text' : 'password'} label={'confirmPassword'} className='confirm' register={register} errors={errors}
                                rules={{ required: true, pattern: { value: /^[0-9a-zA-Z]{8}$/, message: 'should contain 8 characters' } }}
                            />
                        </div>
                        <img className='eyeIcons icon1' src={icon} alt="" onClick={toggleCnfPwdView} />
                        <img className='eyeIcons icon2' src={icon} alt="" onClick={togglePwdView} />

                        <div className='buttons'>
                            <button className='reset'>Reset</button>
                            <button className='submit'>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Home
