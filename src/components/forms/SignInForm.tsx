import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import {Input} from "@/ui/Input";
import {ErrorMessage} from "@/ui/ErrorMessage";
import {Checkbox} from "@/ui/Checkbox";
import {Button} from "@/ui/Button";
import styled from "styled-components";
import Link from "next/link";

interface FormData {
    email: string;
    password: string;
}

export const SignInForm = () => {
    const {handleSubmit, register, formState: {errors}} = useForm<FormData>();
    const [serverError, setServerError] = useState<string>('')
    const [data, setData] = useState<any>()

    const onSubmit = (data: any) => {
        setData(data)
        setServerError('invalid email or password')
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <p>
                Please fill your detail to access your account.
            </p>
            <Label>
                <Input placeholder={"email"}
                       error={!!errors.email}
                       fullWidth
                       {...register("email", {
                           required: "Please include your email",
                           pattern: {
                               value: /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
                               message: "incorrect email"
                           }
                       })}
                />
                <ErrorMessage>
                    {errors?.email?.message}
                </ErrorMessage>
            </Label>
            <Label>
                <Input placeholder={"password"}
                       type={"password"}
                       error={!!errors.password}
                       fullWidth
                       {...register("password", {
                           required: "Please include your password",
                           pattern: {
                               value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                               message: "min length 8"
                           }
                       })}
                />
                <ErrorMessage>
                    {errors?.password?.message}
                </ErrorMessage>
            </Label>
            <Row>
                <label style={{display: 'block'}}>
                    <Checkbox/>
                    <span style={{marginLeft: 6}}>
                        Remember me
                    </span>
                </label>
                <Link href={"/password-recovery"}>
                    Forgot password?
                </Link>
            </Row>

            <SubmitButton type="submit">
                submit
            </SubmitButton>
            <ErrorMessage>
                {serverError}
            </ErrorMessage>
        </form>
    );
};


const Form = styled.form`
  
`

const Label = styled.label`
  margin: 10px 0;
  display: block;
`

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
`

const SubmitButton = styled(Button)`
  margin: 20px 0 2px;
  width: 100%;
`