import * as React from 'react';
import { Upload, Modal } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

const getBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
};

// 图片的类型
type picParams = {
  previewVisible: boolean;
  previewImage: string;
  previewTitle: string;
  fileList: any[];
};
const PicturesWall: React.FC = (props) => {
  const { picList } = props;
  const [pic, setPic] = React.useState<picParams>({
    previewVisible: false,
    previewImage: '',
    previewTitle: '',
    fileList: [],
  });
  // const state = {
  //   previewVisible: false,
  //   previewImage: '',
  //   previewTitle: '',
  //   fileList: [
  //     {
  //       uid: '-1',
  //       name: 'image.png',
  //       status: 'done',
  //       url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
  //     },
  //     {
  //       uid: '-2',
  //       name: 'image.png',
  //       status: 'done',
  //       url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
  //     },
  //     {
  //       uid: '-3',
  //       name: 'image.png',
  //       status: 'done',
  //       url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
  //     },
  //     {
  //       uid: '-4',
  //       name: 'image.png',
  //       status: 'done',
  //       url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
  //     },
  //     {
  //       uid: '-xxx',
  //       percent: 50,
  //       name: 'image.png',
  //       status: 'uploading',
  //       url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
  //     },
  //     {
  //       uid: '-5',
  //       name: 'image.png',
  //       status: 'error',
  //     },
  //   ],
  // };

  const handleCancel = () => {
    setPic(false);
  };

  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }

    setPic({
      ...pic,
      previewImage: file.url || file.preview,
      previewVisible: true,
      previewTitle: file.name || file.url.substring(file.url.lastIndexOf('/') + 1),
    });
  };

  const handleChange = ({ fileList }) => setPic({ ...pic, fileList });

  // render() {
  const { previewVisible, previewImage, fileList, previewTitle } = pic;
  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );
  return (
    <>
      <Upload
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        listType="picture-card"
        fileList={picList}
        onPreview={handlePreview}
        onChange={handleChange}
      >
        {picList.length >= 8 ? null : uploadButton}
      </Upload>
      <Modal visible={previewVisible} title={previewTitle} footer={null} onCancel={handleCancel}>
        <img alt="example" style={{ width: '100%' }} src={previewImage} />
      </Modal>
    </>
  );
  // }
};

// const PicturesWall: React.FC = () => {
//   return (
//     <>
//       <div>124566</div>
//     </>
//   );
// };

export default PicturesWall;
