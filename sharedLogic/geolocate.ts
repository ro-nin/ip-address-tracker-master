import { AddressDataType } from "../stories/AddressDetails";

export default async function geolocateAddress(
  ipToLocate?: string | undefined
) {
  const apiKey = process.env.NEXT_PUBLIC_GEOIP_KEY;

  const geoLocateIpQuery = `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}${
    ipToLocate ? "&ipAddress=" + ipToLocate : ""
  }`;
  const res = await fetch(geoLocateIpQuery);
  if (res.status != 200 || !res.ok) {
    //TODO: rewrite to throw error, avoid null and undefined distinction
    console.error("could not locate ip_" + res);
    return null;
  }
  const data = await res.json();
  //   console.log(geoLocateIpQuery, res, data);
  if (data) {
    const address: AddressDataType = {
      ipAddress: data.ip,
      location: `${data.location.city}, ${data.location.region}, ${data.location.postalCode}`,
      timezone: `${data.location.timezone}`,
      isp: data.isp,
      latLon: [data.location.lat, data.location.lng],
    };
    return address;
  }

  //TODO: rewrite to throw error, avoid null and undefined distinction
  console.error("could not locate ip_" + res + data);
  return null;
}
