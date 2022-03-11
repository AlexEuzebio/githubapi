import axios from "axios";
import ProfileData from "components/ProfileData";
import { useState } from "react";
import { Profile } from "types/profile";
import ProfileLoader from "./ProfileLoader";

import "./styles.css";

type FormData = {
  user: string;
};

const ProfileSearch = () => {
  const [formData, setFormData] = useState<FormData>({
    user: "",
  });

  const [profile, setProfile] = useState<Profile>();
  const [isLoading, setIsLoading] = useState(false);
  const [searchError, setSearchError] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    getProfileData(formData.user);
  };

  const getProfileData = (user: string) => {
    setIsLoading(true);
    setSearchError(false);
    setProfile(undefined);
    axios
      .get(`https://api.github.com/users/${user}`)
      .then((response) => {
        setProfile(response.data);
      })
      .catch((error) => {
        setProfile(undefined);
        setSearchError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="profile-search-container">
      <div className="search-card">
        <h2>Encontre um perfil Github</h2>
        <div className="form-container">
          <form onSubmit={handleSubmit} className="search-form">
            <label htmlFor="user" hidden>
              Usuário Github
            </label>
            <input
              type="text"
              id="user"
              name="user"
              value={formData.user}
              className="form-input"
              placeholder="Usuário Github"
              onChange={handleChange}
            ></input>
            <div className="base-btn-container">
              <button type="submit" id="btn-search" className="btn-primary">
                <h6>Encontrar</h6>
              </button>
            </div>
          </form>
        </div>
      </div>
      {profile ? (
        <div className="profile-card">
          <div className="img-container">
            <img src={profile.avatar_url} alt="Imagem do perfil"></img>
          </div>
          <div className="info-container">
            <h4>Informações</h4>
            <div className="url-container">
              <ProfileData field="Perfil" value1={profile.url} value2={profile.html_url} />
            </div>
            <div className="followers-container">
              <ProfileData field="Seguidores" value1={profile.followers} value2=""/>
            </div>
            <div className="locale-container">
              <ProfileData field="Localidade" value1={profile.location} value2=""/>
            </div>
            <div className="name-container">
              <ProfileData field="Nome" value1={profile.name} value2=""/>
            </div>
          </div>
        </div>
      ) : isLoading ? (
        <ProfileLoader />
      ) : searchError ? (
        <div className="error-msg-container" >
          <p>Não foi possível encontrar o perfil</p>
        </div>
      ) : (
        <p></p>
      )}
    </div>
  );
};

export default ProfileSearch;
