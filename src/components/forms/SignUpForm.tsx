import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import {Input} from "@/ui/Input";
import {ErrorMessage} from "@/ui/ErrorMessage";
import {Checkbox} from "@/ui/Checkbox";
import Link from "next/link";
import styled from "styled-components";
import {Button} from "@/ui/Button";

interface FormData {
    email: string;
    password: string;
    confirmPassword: string;
}

export const SignUpForm = () => {
    const {handleSubmit, register, formState: {errors}, watch} = useForm<FormData>();
    const [serverError, setServerError] = useState<string>('')
    const [data, setData] = useState<any>()

    const onSubmit = (data: any) => {
        setData(data)
        setServerError('email is already exist')
    }
    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Text>
                Please fill your detail to create account.
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
            <Label>
                <Input placeholder={"confirm password"}
                       type={"password"}
                       error={!!errors.password}
                       fullWidth
                       {...register("confirmPassword", {
                           required: "please, confirm password",
                           validate: (val: string) => {
                               if (watch('password') !== val) {
                                   return "Your passwords do no match";
                               }
                           }
                       })}
                />
                <ErrorMessage>
                    {errors?.confirmPassword?.message}
                </ErrorMessage>
            </Label>
            <Row>
                <label style={{display: 'block'}}>
                    <Checkbox/>
                    <span style={{marginLeft: 6}}>
                        Remember me
                    </span>
                </label>
            </Row>

            <SubmitButton type="submit">
                Sign up
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