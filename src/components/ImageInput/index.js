import React, { useState, useRef, useEffect } from 'react';

import { toast } from 'react-toastify';
import { useField } from '@rocketseat/unform';

import { MdAddAPhoto } from 'react-icons/md';
import { Container } from './styles';

import api from '~/services/api';

export default function ImageInput() {
  const { defaultValue, registerField } = useField('image');
  const ref = useRef();

  useEffect(() => {
    if (ref.current) {
      registerField({
        name: 'image_id',
        ref: ref.current,
        path: 'dataset.file',
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref]);

  const [idImage, setIdaImage] = useState(defaultValue && defaultValue.id);
  const [preview, setPreview] = useState(defaultValue && defaultValue.url);

  async function handleChange(e) {
    const data = new FormData();

    data.append('file', e.target.files[0]); // Gets only the first file

    try {
      const response = await api.post('files', data);

      const { id, url } = response.data;

      setIdaImage(id);
      setPreview(url);
    } catch (err) {
      toast.error('Whoops! Internal server error.');
    }
  }

  return (
    <Container>
      <label htmlFor="image">
        {preview && <img src={preview} alt="Banner" />}

        {!preview && (
          <div className="icon-add">
            <MdAddAPhoto size={48} color="rgba(255, 255, 255, .7)" />
          </div>
        )}

        <input
          type="file"
          name=""
          id="image"
          accept="image/*"
          data-file={idImage}
          onChange={handleChange}
          ref={ref}
        />
      </label>
    </Container>
  );
}
