import React from 'react'
import { useForm, Controller } from 'react-hook-form';
import ReactSelect from 'react-select';

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    watch
  } = useForm();


  const confirmPwd = watch(["password","confirmPwd"]);

  function validatePwd(){
      return confirmPwd[0] === confirmPwd[1]? true: false
  }


  const onSubmit = (data) => {
    console.log('data', data);
    // API REQUEST
  };

  const selectOptions = [
    {
      value: 1,
      label: 'Football',
    },
    {
      value: 2,
      label: 'Swimming',
    },
    {
      value: 3,
      label: 'Music',
    },
    {
      value: 4,
      label: 'Art',
    },
  ];
  const selectOptionsGender=[
    {
        value: 1,
        label: 'Male',
      },
      {
        value: 2,
        label: 'Female',
      },
  ]

  return (
    <div className='d-flex justify-content-center align-items-center flex-column '>
      <h2 className='my-5'>Create a new account</h2>
      <form className='border p-5 w-50' onSubmit={handleSubmit(onSubmit)}>
        <div className='email-wrapper input-group'>
          <input
          className="form-control"
            placeholder='User email'
            type='text'
            {...register('user_email', { 
            required: true,
            pattern:/^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/
            })}
          />
          {errors.user_email && errors.user_email.type === 'required' && (
            <p className='text-danger my-2'>User email is required</p>
          )}
           {errors.user_email && errors.user_email.type === 'pattern' && (
            <p className='text-danger my-2'>Enter a valid email</p>
          )}
        </div>

        <div className='my-5 input-group'>
        <Controller
        className='w-100'
        name="selectGender"
        control={control}
        {...register('gender', { 
            required: true,
            })}
        render={({ field }) => <ReactSelect 
          {...field} 
          options={selectOptionsGender} 
          isSearchable
          placeholder='Select Gender'
        />}
      />
        {errors.gender && errors.gender.type === 'required' && (
            <p className='text-danger my-2'>Gender is required</p>
          )}

        </div>


        <div className='my-5 input-group'>
        <Controller
        className='w-100'
        name="selecthobbies"
        control={control}
        render={({ field }) => <ReactSelect 
          {...field} 
          options={selectOptions} 
          isMulti
          isSearchable
          placeholder='Select hobbies'
        />}
      />

        </div>

        <div className='password-wrapper input-group'>
          <input
            className="form-control"
            placeholder='Password'
            type='password'
            {...register('password', { 
                required: true,
                pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
                })}
          />
            {errors.password && errors.password.type === 'required' && (
            <p className='text-danger my-2'>Password is required</p>
          )}
            {errors.password && errors.password.type === 'pattern' && (
            <p className='text-danger my-2'>Password not valid</p>
          )}
        </div>


        <div className='password-wrapper input-group my-5'>
          <input
            className="form-control"
            placeholder='Confirm Password'
            type='password'
            {...register('confirmPwd',{
                validate: validatePwd
              })}
          />
            {errors.confirmPwd && errors.confirmPwd.type === 'validate' && (
            <p className='text-danger my-2'>Password is not match</p>
          )}
        </div>


        <div className='submit-wrapper my-5 d-flex justify-content-center'>
          <button className='btn btn-primary btn-lg w-100' type='submit'>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signup;