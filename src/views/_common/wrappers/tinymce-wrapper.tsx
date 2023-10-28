import { Editor } from "@tinymce/tinymce-react";
import { env } from "../../../utils/constants/common";

type Props = {
  name: string,
  height?: string,
};

const TinyMceWrapper = (props: Props) => {
  return (
    <Editor
      textareaName={props.name}
      apiKey={env.VITE_TINY_API_KEY}
      init={{
        height: props?.height || '300px',
        branding: false,
        plugins: 'searchreplace autolink directionality visualblocks visualchars image link media codesample table charmap pagebreak nonbreaking anchor insertdatetime advlist lists wordcount help charmap emoticons autosave',
        toolbar: 'undo redo print spellcheckdialog formatpainter | blocks fontfamily fontsize | bold italic underline forecolor backcolor | link image | alignleft aligncenter alignright alignjustify lineheight | checklist bullist numlist indent outdent | removeformat',
      }}
    />
  );
}

export default TinyMceWrapper;
