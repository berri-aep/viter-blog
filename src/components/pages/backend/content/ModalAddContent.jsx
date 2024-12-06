import React from "react";
import ModalWrapper from "../partials/Modals/ModalWrapper";
import { ImagePlusIcon, X } from "lucide-react";
import SpinnerButton from "../partials/spinners/SpinnerButton";
import { setIsAdd } from "@/components/store/storeAction";
import { StoreContext } from "@/components/store/storeContext";
import { FieldArray, Form, Formik } from "formik";
import * as Yup from "Yup";
import { InputPhotoUpload, InputText } from "@/components/helpers/FormInputs";
import useUploadPhoto from "@/components/custom-hook/useUploadPhoto";
import { InputSelect } from "@/components/helpers/FormInputs";
import { InputTextArea } from "@/components/helpers/FormInputs";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const ModalAddContent = ({ itemEdit }) => {
  const { dispatch } = React.useContext(StoreContext);
  const handleClose = () => dispatch(setIsAdd(false));

  const { uploadPhoto, handleChangePhoto, photo } =
    useUploadPhoto("/v2/upload-photo");

  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (values) =>
      queryData(
        itemEdit ? `/v2/blog/${itemEdit.blog_aid}` : `/v2/blog`,
        itemEdit ? "put" : "post",
        values
      ),
    onSuccess: (data) => {
      // Invalidate and refetch
      console.log(data);
      queryClient.invalidateQueries({
        queryKey: ["blog"],
      });

      // show error box
      if (data.success) {
        dispatch(setIsAdd(false));
        dispatch(setSuccess(true));
      } else {
        dispatch(setValidate(true));
        dispatch(setMessage(data.error));
      }
    },
  });

  const initVal = {
    blog_title: "",
    blog_excerpt: "",
    blog_category: "",
    blog_author: "",
    blog_reading_time: "",
    blog_content: "",
    blog_published_date: "",
    blog_description: "",

    blog_title_old: "",
  };
  const yupSchema = Yup.object({
    // blog_title: Yup.string().required("required"),
    // blog_excerpt: Yup.string().required("required"),
    // blog_category: Yup.string().required("required"),
    // blog_author: Yup.string().required("required"),
    // blog_reading_time: Yup.string().required("required"),
    // blog_content: Yup.string().required("required"),
    // blog_published_date: Yup.string().required("required"),
    // blog_description: Yup.string().required("required"),
  });
  return (
    <>
      <ModalWrapper>
        <div className="modal-main bg-primary absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[1300px] w-full rounded-md border border-line">
          <div className="modal-header flex gap-2 p-2 items-center border-b border-line mb-2">
            <span className="text-body">Add Content</span>
            <button className="ml-auto" onClick={handleClose}>
              <X />
            </button>
          </div>
          <div className="modal-body p-2 py-4">
            <Formik
              initialValues={initVal}
              validationSchema={yupSchema}
              onSubmit={async (values) => {
                console.log(values)
                mutation.mutate({
                  ...values,
                  blog_image:
                    (itemEdit?.blog_image === "" && photo) ||
                    (!photo && "") ||
                    (photo === undefined && "") ||
                    (photo && itemEdit?.blog_image !== photo?.name)
                      ? photo?.name || ""
                      : itemEdit?.blog_image || "",
                });
                uploadPhoto();
              }}
            >
              {(props) => {
                return (
                  <Form>
                    <div className="grid grid-cols-[1fr_1fr] gap-5">
                      <div className="info">
                        <h3 className="mb-0">Information</h3>
                        <div className="input-wrap relative  group input-photo-wrap h-[150px] ">
                          {itemEdit === null && photo === null ? (
                            <div className="w-full  rounded-md flex justify-center items-center flex-col h-full">
                              <ImagePlusIcon
                                size={50}
                                strokeWidth={1}
                                className="opacity-20 group-hover:opacity-50 transition-opacity"
                              />
                              <small className="opacity-20 group-hover:opacity-50 transition-opacity">
                                Upload Photo
                              </small>
                            </div>
                          ) : (
                            <img
                              src={
                                photo
                                  ? URL.createObjectURL(photo) // preview
                                  : imgPath + "/" + itemEdit?.blog_image // check db
                              }
                              alt="blog photo"
                              className={`group-hover:opacity-30 duration-200 relative object-cover h-full w-full  m-auto ${
                                mutation.isPending
                                  ? "opacity-40 pointer-events-none"
                                  : ""
                              }`}
                            />
                          )}

                          <InputPhotoUpload
                            name="photo"
                            type="file"
                            id="photo"
                            accept="image/*"
                            title="Upload photo"
                            onChange={(e) => handleChangePhoto(e)}
                            onDrop={(e) => handleChangePhoto(e)}
                            className={`opacity-0 absolute top-0 right-0 bottom-0 left-0 rounded-full  m-auto cursor-pointer w-full h-full ${
                              mutation.isPending ? "pointer-events-none" : ""
                            }`}
                          />
                        </div>

                        <div className="input-wrap">
                          <InputText
                            label="Title"
                            name="blog_title"
                            type="text"
                          />
                        </div>
                        <div className="input-wrap">
                          <InputText
                            label="Excerpt"
                            name="blog_excerpt"
                            type="text"
                          />
                        </div>
                        <div className="input-wrap">
                          <InputText
                            label="Date"
                            name="blog_published_date"
                            type="date"
                          />
                        </div>
                        <div className="input-wrap">
                          <InputSelect label="Category" name="blog_category">
                            <option value="" hidden>
                              Select Category
                            </option>
                            <option value="branding">Branding</option>
                            <option value="video">Video</option>
                            <option value="design">Design</option>
                            <option value="content">Content</option>
                          </InputSelect>
                        </div>
                        <div className="input-wrap">
                          <InputText
                            label="reading time"
                            name="blog_reading_time"
                            type="text"
                          />
                        </div>
                        <div className="input-wrap">
                          <InputText
                            label="Author"
                            name="blog_author"
                            type="text"
                          />
                        </div>
                        <div className="input-wrap">
                          <InputTextArea
                            label="Author Description"
                            name="blog_description"
                            type="text"
                          />
                        </div>
                      </div>

                      <div className="content">
                        <div className="input-wrap">
                          <h3>Content</h3>
                          <InputTextArea
                            name="blog_content"
                            className="overflow-y-auto custom-scroll !h-[494px] w-full rounded-md p-2 outline-none bg-primary border borderline resize-none text-body"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-end gap-3 mt-5">
                      <button className="btn btn-accent" type="submit">
                        {mutation.isPending && <SpinnerButton />}
                        {itemEdit ? "Save" : "Add"}
                      </button>
                      <button
                        className="btn btn-cancel"
                        type="reset"
                        onClick={handleClose}
                      >
                        Cancel
                      </button>
                    </div>
                  </Form>
                );
              }}
            </Formik>
          </div>
        </div>
      </ModalWrapper>
    </>
  );
};

export default ModalAddContent;
