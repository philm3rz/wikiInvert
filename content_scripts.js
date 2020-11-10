a = window.location.href;
if (!a.includes("en.m.")) window.location.href = a.slice(0, 11) + "m." + a.slice(11);