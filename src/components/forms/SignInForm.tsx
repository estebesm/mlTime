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
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Text>
                Please fill your detail to access your account.
            </Text>
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
                    <span style={{
                        fontSize: "var(--text-sm)"
                    }}>
                        Forgot password?
                    </span>
                </Link>
            </Row>

            <SubmitButton type="submit">
                Sign in
            </SubmitButton>
            <ErrorMessage>
                {serverError}
            </ErrorMessage>
        </Form>
    );
};


const Form = styled.form`
  padding: 10px 0;
`

const Label = styled.label`
  margin: 20px 0;
  display: block;
`

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
`

const SubmitButton = styled(Button)`
  margin: 40px 0 2px;
  width: 100%;
`

const Text = styled.p`
  padding: 10px 0;
  text-align: center;
`
