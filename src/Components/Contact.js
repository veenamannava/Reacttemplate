import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import { Form, Button } from 'semantic-ui-react';
import {useRef} from 'react';

const Contact= () =>  {
   const [firstName, setFirstName] = useState(false);
   
   const { register, handleSubmit, formState: { errors } } = useForm();
   const onSubmit =(data,e) => {
       alert("submitted");
       e.preventDefault();
       e.target.reset();
      }
     
return (
            <div class="row" id="contact">
      <div class="col-md-4 p-0 col-sm-4  col-lg-4 col-xs-4">
         <div class="sec3-left-bg">
         <div className="text">
            <h1 className="text-center">STAY<br/>IN <br/>TOUCH</h1>
            </div>
            <h2 className="text-center">Use Contact<br/> from on the Right<br/><br/></h2>
         </div>
      </div>
      <div class="col-md-8 p-0 col-sm-8 col-lg-8 col-xs-8" >
         <div class="itembox2">
            <h2>Lorem ipsum dolor sit amet, tempor prodesset eos no. Temporibus</h2>
         </div>
         <div class="wrapper cntct-bx">
            <div>
               <h2>Contact us</h2>
            </div>
            <div id="error_message">
            </div>
            <Form action="" id="myform" onSubmit={handleSubmit(onSubmit)}>
               <div className="input_field">
               <Form.Field>
                  <input type="text" placeholder="Name" id="name"   {...register("name" , { required: true, maxLength: 5})} />
                  </Form.Field>
                  {errors.name && <p  className="paragraph-text">Please check the  Name</p>}
               </div>
               <div className="input_field">
               <Form.Field>
                  <input type="text" placeholder="Subject" id="subject"  {...register("subject", { required: true, maxLength: 10})}/>
                  </Form.Field>
               
               {errors.subject && <p  className="paragraph-text">Please check the subject</p>}
               </div>
               <div className="input_field">
               <Form.Field>
                  <input type="text" placeholder="Phone" id="phone"     {...register("phone",{ required: true, maxLength: 10})}/>
                  </Form.Field>
                  {errors.phone && <p  className="paragraph-text">Please check the phone number</p>}
               </div>
               <div className="input_field">
               <Form.Field>
                  <input type="text" placeholder="Email"  id="email"   {...register("email", {
                                required: true,
                                pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/})}/>
                                </Form.Field>
                                {errors.email && <p className="paragraph-text">Please check the Email</p>}
               </div>
               <div className="input_field">
               <Form.Field>
                  <textarea placeholder="Message" id="message"  {...register("message",{ required: true, maxLength: 30})}></textarea>
                  </Form.Field>
                  {errors.message && <p  className="paragraph-text">Please check the message</p>}
               </div>
               <div className="btn">
                  <input type="submit" />
               </div>
            </Form>
         </div>
      </div>
      <div>
         
    
    </div>
         </div>
        )
    
}
export default Contact;
