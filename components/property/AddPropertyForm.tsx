"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import FormHading from "@/components/ui/form-hading";
import { Input } from "@/components/ui/input";
import {
  locationArray,
  numberArray,
  residentialArray,
  sizePerUnitArray,
} from "@/constants/global";
import { useCreatePropertyMutation } from "@/redux/api/propertysApi";
import { homeSchema } from "@/schemas/home-schema";
import ImageUpload from "../image-upload";
import SelectInputField from "../select-input-fild";
import { Checkbox } from "../ui/checkbox";
import { Textarea } from "../ui/textarea";

const AddPropertyForm = () => {
  const router = useRouter();

  const [createProperty] = useCreatePropertyMutation();

  const form = useForm<z.infer<typeof homeSchema>>({
    resolver: zodResolver(homeSchema),
    defaultValues: {},
  });

  const onSubmit = async (values: z.infer<typeof homeSchema>) => {
    try {
      const res: any = await createProperty(values);
      if (res.data) {
        toast.success("Property Created Successfully");
        form.reset();
        router.push("/en/dashboard/my-properties");
      } else {
        toast(res?.error);
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  };
  return (
    <div>
      <div className="flex items-center justify-center w-full">
        <div className="w-full">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              {/* Personal Info */}
              <div className="w-full">
                <FormHading title="Property Information" />
                <div className="mb-3">
                  <FormField
                    control={form.control}
                    name="home.images"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          Add images <span className="text-red-500">min 5</span>{" "}
                        </FormLabel>
                        <FormControl>
                          <ImageUpload
                            value={field.value?.map((image) => image.url)}
                            // disabled={loading}
                            onChange={(url) =>
                              field.onChange([...(field.value || []), { url }])
                            }
                            onRemove={(url) =>
                              field.onChange([
                                ...field.value.filter(
                                  (current) => current.url !== url
                                ),
                              ])
                            }
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className=" w-full grid grid-cols-1 md:grid-cols-4 gap-3">
                  <div className="">
                    <FormField
                      control={form.control}
                      name="home.title"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>
                            Title <span className="text-red-500">*</span>
                          </FormLabel>
                          <FormControl>
                            <Input
                              // disabled={loading}
                              placeholder="Title"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div>
                    <FormField
                      control={form.control}
                      name="home.tageLine"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>
                            Tag Line <span className="text-red-500">*</span>
                          </FormLabel>
                          <FormControl>
                            <Input placeholder="Tag Line" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div>
                    <FormField
                      control={form.control}
                      name="home.tages"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>
                            Add Tag <span className="text-red-500">*</span>
                          </FormLabel>
                          <FormControl>
                            <Input placeholder="Add Tag" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div>
                    <FormField
                      control={form.control}
                      name="home.price"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>
                            Price <span className="text-red-500">*</span>
                          </FormLabel>
                          <FormControl>
                            <Input placeholder="Price" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div>
                    <FormField
                      control={form.control}
                      name="home.offerPrice"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>
                            Offer Price <span className="text-red-500">*</span>
                          </FormLabel>
                          <FormControl>
                            <Input placeholder="Offer Price" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="">
                    <FormField
                      control={form.control}
                      name="home.location"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>
                            Location <span className="text-red-500">*</span>
                          </FormLabel>
                          <FormControl>
                            <SelectInputField
                              field={field}
                              placeholder="Select a Location"
                              mapData={locationArray}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  {/* homeSizeDetails */}

                  <div>
                    <div className="grid grid-cols-2 gap-1">
                      <FormField
                        control={form.control}
                        name="home.residential"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>
                              Residential{" "}
                              <span className="text-red-500">*</span>
                            </FormLabel>
                            <FormControl>
                              <SelectInputField
                                field={field}
                                placeholder="Residential"
                                mapData={residentialArray}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="home.homeSizeDetails.numberOfFloors"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>
                              Number Of Floors
                              <span className="text-red-500">*</span>
                            </FormLabel>
                            <FormControl>
                              <SelectInputField
                                field={field}
                                placeholder="Floors No"
                                mapData={numberArray}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                  <div className="">
                    <div className="grid grid-cols-2 gap-1">
                      <FormField
                        control={form.control}
                        name="home.homeSizeDetails.numberOfRooms"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>
                              Total Rooms
                              <span className="text-red-500">*</span>
                            </FormLabel>
                            <FormControl>
                              <SelectInputField
                                field={field}
                                placeholder="Total Rooms"
                                mapData={numberArray}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="home.homeSizeDetails.numberOfBathrooms"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>
                              Total Bathrooms
                              <span className="text-red-500">*</span>
                            </FormLabel>
                            <FormControl>
                              <SelectInputField
                                field={field}
                                placeholder="Total Bath"
                                mapData={numberArray}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                  <div className="">
                    <div className="grid grid-cols-2 gap-1">
                      <FormField
                        control={form.control}
                        name="home.homeSizeDetails.numberOfBalconies"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>
                              Total Balconies
                              <span className="text-red-500">*</span>
                            </FormLabel>
                            <FormControl>
                              <SelectInputField
                                field={field}
                                placeholder="Total Balconies"
                                mapData={numberArray}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="home.homeSizeDetails.numberOfWindos"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>
                              Total Window
                              <span className="text-red-500">*</span>
                            </FormLabel>
                            <FormControl>
                              <SelectInputField
                                field={field}
                                placeholder="Total Window"
                                mapData={numberArray}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                  <div className="">
                    <div className="grid grid-cols-2 gap-1">
                      <FormField
                        control={form.control}
                        name="home.homeSizeDetails.sizePerUnit"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>
                              Size Per Unit
                              <span className="text-red-500">*</span>
                            </FormLabel>
                            <FormControl>
                              <SelectInputField
                                field={field}
                                placeholder="Home Size Unit"
                                mapData={sizePerUnitArray}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="home.homeSizeDetails.totalSQFT"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>
                              Total Size <span className="text-red-500">*</span>
                            </FormLabel>
                            <FormControl>
                              <Input placeholder="Total Size" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                  {/* homeSizeDetails */}
                  {/*features  */}
                  <div>
                    <div className=" grid grid-cols-3 gap-2 h-full items-center">
                      <FormField
                        control={form.control}
                        name="home.features.hasGarage"
                        render={({ field }) => (
                          <FormItem className="flex flex-col  ">
                            <FormLabel>Garage</FormLabel>
                            <FormControl>
                              <Checkbox
                                checked={field.value}
                                onCheckedChange={field.onChange}
                              />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="home.features.hasGarden"
                        render={({ field }) => (
                          <FormItem className="flex flex-col  ">
                            <FormLabel>Garden</FormLabel>
                            <FormControl>
                              <Checkbox
                                checked={field.value}
                                onCheckedChange={field.onChange}
                              />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="home.features.hasAirConditioning"
                        render={({ field }) => (
                          <FormItem className="flex flex-col  ">
                            <FormLabel>AC</FormLabel>
                            <FormControl>
                              <Checkbox
                                checked={field.value}
                                onCheckedChange={field.onChange}
                              />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                  <div>
                    <div className=" grid grid-cols-3 gap-2 h-full items-center ">
                      <FormField
                        control={form.control}
                        name="home.features.hasInternet"
                        render={({ field }) => (
                          <FormItem className="flex flex-col  ">
                            <FormLabel>Internet</FormLabel>
                            <FormControl>
                              <Checkbox
                                checked={field.value}
                                onCheckedChange={field.onChange}
                              />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="home.features.hasSecurity"
                        render={({ field }) => (
                          <FormItem className="flex flex-col  ">
                            <FormLabel>Security</FormLabel>
                            <FormControl>
                              <Checkbox
                                checked={field.value}
                                onCheckedChange={field.onChange}
                              />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="home.features.hasCleaning"
                        render={({ field }) => (
                          <FormItem className="flex flex-col  ">
                            <FormLabel>Cleaning</FormLabel>
                            <FormControl>
                              <Checkbox
                                checked={field.value}
                                onCheckedChange={field.onChange}
                              />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                  {/*features  */}
                  <div className="md:col-span-2">
                    <FormField
                      control={form.control}
                      name="home.description"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>
                            Description <span className="text-red-500">*</span>
                          </FormLabel>
                          <FormControl>
                            <Textarea placeholder="Description" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div>
                    <FormField
                      control={form.control}
                      name="home.address"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>
                            Address <span className="text-red-500">*</span>
                          </FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="RodNo, Street, City"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div>
                    <FormField
                      control={form.control}
                      name="home.homeType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>
                            Home Type <span className="text-red-500">*</span>
                          </FormLabel>
                          <FormControl>
                            <Textarea placeholder="Home Type" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="md:col-span-2">
                    <div className="grid grid-cols-1 md:grid-cols-4"></div>
                  </div>
                </div>
              </div>
              {/* Basic Info */}
              {/* <div className=" mt-3 ">
                <FormHading title="Basic Information" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="">
                    <FormField
                      control={form.control}
                      name="homeOwner.gender"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Gender</FormLabel>
                          <FormControl>
                            <SelectInputField
                              field={field}
                              placeholder="Select a gender"
                              mapData={bloodGroupsOption}
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
                      name="homeOwner.bloodGroup"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Blood Group</FormLabel>
                          <FormControl>
                            <SelectInputField
                              field={field}
                              placeholder="Select a Blood Group"
                              mapData={residentialArray}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
              </div> */}
              {/* User info */}
              {/* <div className=" mt-3 ">
                <FormHading title="User Information" />
                <div className="mb-4">
                  <FormField
                    control={form.control}
                    name="homeOwner.profileImage"
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
              </div> */}

              <div className="pt-6 space-x-2 flex  justify-end w-full">
                <Button className="" type="submit">
                  Create
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default AddPropertyForm;
