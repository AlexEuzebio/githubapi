import "./styles.css";

type Props = {
  field: string;
  value1: string;
  value2: string;
};

const ProfileData = ({ field, value1, value2 }: Props) => {
  return (
    <div className="profile-data-container">
      <h5>{field}:</h5>
      {field === "Perfil" ? <a href={value2} target="_blank">{value1}</a> : <p>{value1}</p>}
    </div>
  );
};
export default ProfileData;
