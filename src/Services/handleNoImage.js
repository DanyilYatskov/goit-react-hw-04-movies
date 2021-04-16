const handleNoImage = e => {
  e.target.onerror = null;
  e.target.src =
    'https://i.pinimg.com/564x/12/61/84/126184dfb0f0c766bfd35206dae35b37.jpg';
};

export default handleNoImage;
