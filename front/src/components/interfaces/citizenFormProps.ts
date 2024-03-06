import CitizenProps from "../../interfaces/Citizen";

export interface CitizenFormProps {
  onSubmit: ( formData: CitizenProps) => void;
}