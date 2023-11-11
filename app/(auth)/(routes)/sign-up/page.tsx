"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import * as z from "zod";

import ImageUpload from "@/components/image-upload";
import SelectInputField from "@/components/select-input-fild";
import { Button } from "@/components/ui/button";
import Container from "@/components/ui/container";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import FormHading from "@/components/ui/form-hading";
import { Heading } from "@/components/ui/heading";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { bloodGroupsOption, genderOptionObject } from "@/constants/global";

import { userFormSchema } from "@/schemas/rent-user";

const SignUp = () => {
  const form = useForm<z.infer<typeof userFormSchema>>({
    resolver: zodResolver(userFormSchema),
    defaultValues: {},
  });

  const onSubmit = async (values: z.infer<typeof userFormSchema>) => {
    try {
      console.log(values);
      // const res = await createrentUser(values);
      // console.log(res);
      form.reset();
      toast.success("rentUser created successfully");
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
    }
  };
  return (
    <Container>
      <div className="flex-1 space-y-4 p-8 pt-6">
        <Heading
          title="Sign Up "
          description="Please fill up the form to create a new account."
        />
        <Separator />
        <div className="space-y-4 py-2 pb-4">
          <div className="space-y-2">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)}>
                {/* Personal Info */}
                <div className="border px-3 py-5 rounded-md shadow">
                  <FormHading title="Personal Information" />
                  <div className=" grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="">
                      <FormField
                        control={form.control}
                        name="rentUser.name.firstName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>First Name</FormLabel>
                            <FormControl>
                              <Input
                                // disabled={loading}
                                placeholder="First Name"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className="">
                      <FormField
                        control={form.control}
                        name="rentUser.name.middleName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Middle Name</FormLabel>
                            <FormControl>
                              <Input
                                // disabled={loading}
                                placeholder="Middle Name"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className=".">
                      <FormField
                        control={form.control}
                        name="rentUser.name.lastName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Last Name</FormLabel>
                            <FormControl>
                              <Input
                                // disabled={loading}
                                placeholder="Last Name"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className=".">
                      <FormField
                        control={form.control}
                        name="rentUser.email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input
                                // disabled={loading}
                                placeholder="exmpole@gmail.com"
                                type="email"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className=".">
                      <FormField
                        control={form.control}
                        name="rentUser.dateOfBirth"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Det of Birth</FormLabel>
                            <FormControl>
                              <Input
                                // disabled={loading}
                                placeholder="Select Date"
                                {...field}
                                type="date"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className=".">
                      <FormField
                        control={form.control}
                        name="rentUser.contactNo"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Contact No</FormLabel>
                            <FormControl>
                              <Input
                                // disabled={loading}
                                placeholder="Contact No"
                                type="tel"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className=".">
                      <FormField
                        control={form.control}
                        name="rentUser.emergencyContactNo"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Emergency Contact No</FormLabel>
                            <FormControl>
                              <Input
                                // disabled={loading}
                                placeholder="Emergency Contact No"
                                {...field}
                                type="tel"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                </div>
                {/* Basic Info */}
                <div className="border mt-3 px-3 py-5 rounded-md shadow">
                  <FormHading title="Basic Information" />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="">
                      <FormField
                        control={form.control}
                        name="rentUser.gender"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Gender</FormLabel>
                            <FormControl>
                              <SelectInputField
                                field={field}
                                placeholder="Select a gender"
                                mapData={genderOptionObject}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className="">
                      <FormField
                        control={form.control}
                        name="rentUser.bloodGroup"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Blood Group</FormLabel>
                            <FormControl>
                              <SelectInputField
                                field={field}
                                placeholder="Select a Blood Group"
                                mapData={bloodGroupsOption}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className=".">
                      <FormField
                        control={form.control}
                        name="rentUser.presentAddress"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Present Address</FormLabel>
                            <FormControl>
                              <Input
                                // disabled={loading}
                                placeholder="Street, City, Country"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className=".">
                      <FormField
                        control={form.control}
                        name="rentUser.permanentAddress"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Permanent Address</FormLabel>
                            <FormControl>
                              <Input
                                // disabled={loading}
                                placeholder="Street, City, Country"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                </div>
                {/* User info */}
                <div className="border mt-3 px-3 py-5 rounded-md shadow">
                  <FormHading title="User Information" />
                  <div className="mb-4">
                    <FormField
                      control={form.control}
                      name="rentUser.profileImage"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Profile image</FormLabel>
                          <FormControl>
                            <ImageUpload
                              value={field.value ? [field.value] : []}
                              // disabled={loading}
                              onChange={(url) => field.onChange(url)}
                              onRemove={() => field.onChange("")}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className=".">
                      <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                              <Input
                                // disabled={loading}
                                placeholder="Password"
                                {...field}
                                type="password"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className=".">
                      <FormField
                        control={form.control}
                        name="nidNumber"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>National Identity Card No</FormLabel>
                            <FormControl>
                              <Input
                                // disabled={loading}
                                placeholder="National Identity Card No"
                                type="number"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                </div>

                <div className="pt-6 space-x-2 flex items-center justify-center w-full">
                  <Button type="submit">Sign Up</Button>
                </div>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default SignUp;
