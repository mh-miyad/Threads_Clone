import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
interface Inputs {
  skill: [{}];
}
const SkillSection = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  return (
    <form className="col-span-2 grid" onSubmit={handleSubmit(onSubmit)}>
      <div className="w-full ">
        <label
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          htmlFor="phone"
        >
          Website
        </label>
        <input
          className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
          type="text"
          placeholder="ProtFolio Website  "
          id="phone"
          {...register("skill", { required: true })}
        />
      </div>
    </form>
  );
};

export default SkillSection;
